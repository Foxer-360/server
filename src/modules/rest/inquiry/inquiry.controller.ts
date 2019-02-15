import {
  Controller,
  Req,
  Response,
  Post,
  FileInterceptor,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';

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
      res.status(201).send(inquiry);
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  }
}