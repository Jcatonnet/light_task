import { processWorkflow } from "../services/workflowService.js";

const approveInvoice = (req, res) => {
  const { amount, department, managerApproval } = req.body;
  try {
    const response = processWorkflow({
      amount,
      department,
      managerApproval,
    });
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { approveInvoice };
