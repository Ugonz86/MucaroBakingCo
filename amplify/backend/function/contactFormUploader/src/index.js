const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const customerReason = streamedItem.dynamodb.NewImage.reason.S
      const customerName = streamedItem.dynamodb.NewImage.name.S
      const customerEmail = streamedItem.dynamodb.NewImage.email.S
      const customerMessage = streamedItem.dynamodb.NewImage.message.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: `${customerReason} - ${customerName}` },
              Body: {
                Text: { Data: `My name is ${customerName}. You can reach me at ${customerEmail}. ${customerMessage}` },
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
}
