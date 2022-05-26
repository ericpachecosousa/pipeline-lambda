exports.handler = async (event) => {
    const min = 1;
    const max = 6;    
    const randomNumber = Math.floor(
      Math.random() * (max - min + 1)
    ) + min;
    const message = 'Your dice throw resulted in: ' + randomNumber;
    const lambdaReturn = {
      "isBase64Encoded": false,
      "statusCode": 200,
      "headers": { "content-type": "text/json" },
      "body": message
    }
    return lambdaReturn;
  };
  
  