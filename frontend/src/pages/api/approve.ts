import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { amount, department, managerApproval } = req.body;

    try {
      const response = await fetch("http://localhost:8080/api/approve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, department, managerApproval }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the invoice");
      }

      const data = await response.json();
      res.status(200).json({ message: data.response });
    } catch (error: any) {
      res.status(500).json({ message: error.response });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
