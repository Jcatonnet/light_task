import { workflows } from "../models/workflow.js";

const checkCondition = (condition, { amount, department, managerApproval }) => {
  switch (condition.type) {
    case "amount":
      if (condition.operator === ">=") {
        return amount >= condition.value;
      } else if (condition.operator === "<") {
        return amount < condition.value;
      }
      break;
    case "department":
      return department.toLowerCase() === condition.department.toLowerCase();
    case "managerApproval":
      return managerApproval === condition.managerApproval;
    default:
      return false;
  }
};

const processWorkflow = ({ amount, department, managerApproval }) => {
  const workflow = workflows[0];

  for (const condition of workflow.conditions) {
    if (
      checkCondition(condition, { amount, department, managerApproval }) &&
      (!condition.department ||
        condition.department.toLowerCase() === department.toLowerCase()) &&
      (condition.managerApproval === undefined ||
        condition.managerApproval === managerApproval)
    ) {
      const action = condition.actions[0];
      return `Sending approval via ${action.type} to ${action.recipient}`;
    }
  }

  return `Sending approval via ${workflow.defaultAction.type} to ${workflow.defaultAction.recipient}`;
};

export { processWorkflow };
