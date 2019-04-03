import {
  Controller,
  Req,
  Post,
  FileInterceptor,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import * as AWS from 'aws-sdk';
import * as fs from 'fs';
import * as request from 'request-promise';

@Controller('inquiry')
export class InquiryController {
  constructor(private readonly prisma: Prisma) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { dest: '/tmp' }))
  public async upload(@UploadedFile() file, @Req() req, @Res() res) {
    let formData = null;
    let result = null;

    if (file && file.path) {
      formData = {
        file: fs.createReadStream(file.path),
      };
    }

    try {
      if (formData) {
        result = await request.post({
          url: `${process.env.MEDIA_LIBRARY_SERVER}/upload`
          + `?category=${process.env.MEDIA_LIBRARY_SERVER__CATEGORY}`,
          formData,
          json: true,
        });
      }
      const ip = req.headers['x-forwarded-for'] || req.ip || 'Ip address didn\'t captured.';

      const inquiry = await this.prisma.mutation.createInquiry({
        data: {
          message: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            text: req.body.text,
            attachment: result ? `${process.env.AWS_ADDRESS}${result.file.category}${result.file.hash}_${result.file.filename}` : null,
            subject: req.body.subject,
          },
          url: req.body.url,
          formType: req.body.formType,
          ip,
        },
      });

      this.notify(req.body);
      res.status(201).send(inquiry);
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }

  private async notify( data ) {
    const { AWS_ACCESSKEY, AWS_SECRET, AWS_REGION } = process.env;
    if (AWS_ACCESSKEY && AWS_SECRET && AWS_REGION) {
      AWS.config.update({
        region: AWS_REGION,
        accessKeyId: AWS_ACCESSKEY,
        secretAccessKey: AWS_SECRET,
      });

      const params = {
        Destination: { /* required */
          ToAddresses: [
            'pavel.krcil@foxmedia.cz',
          ],
        },
        Message: {
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data:
                `Subject: ${data.subject} (${data.formType})\n` +
                `Text:\n` +
                `${data.text}\n\n` +
                `Fullname: ${data.firstName} ${data.lastName}\n` +
                `Phone: ${data.phone}\n` +
                `E-mail: ${data.email}\n`,
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: `[web inquery] ~ ${data.subject}`,
          },
        },
        Source: 'info@foxer360.com', /* required */
      };

      new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise()
        // tslint:disable-next-line:no-console
        .then(() => console.log('OK'))
        // tslint:disable-next-line:no-console
        .catch((e) => console.error(`KO: ${e}`));
    }
  }
}