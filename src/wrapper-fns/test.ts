// import { NextRequest, NextResponse } from "next/server";
// import { stkPushRequest } from "react-daraja";

// const appBaseURL = process.env.APP_BASE_URL;

// export const POST = async (req: NextRequest, res: NextResponse) => {
//   const { phoneNumber, amount, accountReference } = await req.json();

//   try {
//     const stkPushRes = await stkPushRequest({
//       accountReference,
//       amount,
//       callbackURL: `${appBaseURL}/api/stk-push-callback`,
//       phoneNumber,
//       transactionDesc:
//         "Payment for your architectural design from UKUZI STUDIO AND CONSTRUCTION.",
//     });

//     return NextResponse.json({ data: stkPushRes }, { status: 200 });
//   } catch (err: any) {
//     console.error(err);

//     return NextResponse.json(
//       {
//         message: "An error occurred",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// };
