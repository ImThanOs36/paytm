import express from "express";
import db from "@repo/db/client";
const app = express();

app.post("/hdfcWebhook", async(req, res) => {
  const payentInformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };
  db.balance.findFirst({
    where: {
      userId: payentInformation.userId,
    },
  });
  db.balance.update({
    where: {
      userId: payentInformation.userId,
    },
    data: {
      amount: {
        increment: payentInformation.amount,
      },
    },
  });
  await db.onRampTransaction.update({
    where: {
      token: payentInformation.token,
    },
    data: {
      status: "Success",
    },
  });
  res.status(411).json  ({
    message: "captured",
  });
});
