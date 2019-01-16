import {
  Controller,
  Req,
  Response,
  Post,
} from '@nestjs/common';

@Controller('inquiry')
export class InquiryController {
  constructor(
  ) {}

  @Post('upload')
  // @UseGuards(SimpleAuthGuard)
  public async create(@Req() req, @Response() res) {

  }
}