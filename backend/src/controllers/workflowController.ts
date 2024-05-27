import { Request, Response } from "express";
import { processWorkflow } from "../services/workflowService.js";

const approveInvoice = (req: Request, res: Response) => {
  const { amount, department, managerApproval } = req.body;
  try {
    const response = processWorkflow({
      amount,
      department,
      managerApproval,
    });
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export { approveInvoice };
