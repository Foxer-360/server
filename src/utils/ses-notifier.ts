import * as AWS from 'aws-sdk';

export class SESNotifier {
  static async notify( subject, content ) {
    const { AWS_ACCESSKEY, AWS_SECRET, AWS_REGION } = process.env;
    if (AWS_ACCESSKEY && AWS_SECRET && AWS_REGION) {
      AWS.config.update({
        region: AWS_REGION,
        accessKeyId: AWS_ACCESSKEY,
        secretAccessKey: AWS_SECRET,
      });

      const params = {
        Destination: { /* required */
          ToAddresses: [ process.env.NOTIFIER_RECIPIENT ],
        },
        Message: {
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: content,
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: subject,
          },
        },
        Source: process.env.NOTIFIER_SENDER,
      };

      return new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
    }
  }
}