import express from "express";
import { approveInvoice } from "../controllers/workflowController.js";

const router = express.Router();

router.post("/approve", approveInvoice);

export default router;
