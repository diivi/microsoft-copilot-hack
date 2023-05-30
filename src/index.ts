import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "working" });
});

app.listen(process.env.PORT || 3300, () => {
  console.log("Server running on", process.env.PORT ?? 3300);
});
