# React Daraja

React Daraja is a typesafe Javascript library designed to simplify interactions with the Safaricom Daraja API. This library is suitable for both Node.js and React environments, allowing developers to seamlessly integrate M-Pesa payments into their applications.

## Installation

To install React Daraja, run the following command in your project's terminal:

```bash
  npm install react-daraja
```

## Getting Started

Copy over the `.env.local` file into a `.env` file using the following command.
```
cp .env.local .env
```

Before using the library, make sure to set up the required environment variables in the .env file. These variables include:

- **NODE_ENV**: Set the environment to either "production" or "development."

- **MPESA_CONSUMER_KEY**: Consumer Key obtained from Safaricom Daraja.

- **MPESA_CONSUMER_SECRET**: Consumer Secret obtained from Safaricom Daraja.

- **MPESA_BUSINESS_SHORT_CODE**: Your M-Pesa business short code. For Sandbox use the code **174379**

- **MPESA_TRANSACTION_TYPE**: Set the transaction type, either "CustomerPayBillOnline" or "CustomerBuyGoodsOnline."

- **MPESA_API_PASS_KEY**: Your M-Pesa API pass key. For sandbox use **bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919**

The library throws errors if any of this values are missing from your .env file.

## Usage/Examples

- **STK Push Request**

It allows you to initiate an STK push request for M-Pesa payments in **node**. Here is an example of how to use it:

```javascript
import { stkPushRequest } from "react-daraja";

const makeSTKPushRequest = async () => {
  try {
    const response = await stkPushRequest({
      phoneNumber: "254719428019",
      amount: "100",
      callbackURL: "https://example.com/api/stk-push-callback",
      transactionDesc: "Payment for your service",
      accountReference: "user123@example.com",
    });

    console.log("STK Push Request Successful:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

makeSTKPushRequest();
```

and thats it!. The library handles access tokens etc and caches them gracefully.

Make sure to replace the placeholder values with your actual data.

Note: Ensure that your environment variables are correctly set, and the provided values match your Safaricom Daraja account configuration.

Don`t call stkPushRequest from the frontend though. You wil run into all forms of cors errors.

## Compatibility

React Daraja is compatible with Node.js and React environments. It provides a simple interface for initiating M-Pesa transactions using the Safaricom Daraja API.

Some APIs are exclusively for Node Environments and some are just React Components so are only used in react.

## License

This library is licensed under the MIT License. Feel free to contribute or open issues on the GitHub repository. More APIs and components coming. Watch this repo for alerts.
