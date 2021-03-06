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
import * as fs from 'fs';
import * as request from 'request-promise';
import { SESNotifier } from 'utils/ses-notifier';

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
         file: {
          value: fs.createReadStream(file.path),
          options: {
            filename: file.originalname,
            mimetype: file.mimetype,
          },
        },
        category: process.env.MEDIA_LIBRARY_SERVER__CATEGORY,
      };
    }

    try {
      if (formData) {
        result = await request.post({
          url: `${process.env.MEDIA_LIBRARY_SERVER}/upload`,
          formData,
          json: true,
        });
      }

      const ip = req.headers['x-forwarded-for'] || req.ip || 'Ip address didn\'t captured.';
      const attachment = result && result.file
        ? `${process.env.AWS_ADDRESS}${result.file.category}${result.file.hash}_${result.file.filename}`
        : null;

      const inquiry = await this.prisma.mutation.createInquiry({
        data: {
          message: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            text: req.body.text,
            attachment,
            subject: req.body.subject,
          },
          url: req.body.url,
          formType: req.body.formType,
          ip,
        },
      });

      // Notification about inquery
      const content =
        `Subject: ${req.body.subject} (${req.body.formType})\n` +
        `Text:\n` +
        `${req.body.text}\n\n` +
        `Fullname: ${req.body.firstName} ${req.body.lastName}\n` +
        `Phone: ${req.body.phone}\n` +
        `E-mail: ${req.body.email}\n\n` +
        `Source: ${req.body.url}\n` +
        `Attachment URL: ${attachment}\n` +
        `IP: ${ip}\n`;

      SESNotifier.notify(
        `[web inquery] ~ ${req.body.subject}`,
        content,
      );

      res.status(201).send(inquiry);
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }
}