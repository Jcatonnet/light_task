import { v4 as uuidv4 } from "uuid";

const workflows = [
  {
    id: uuidv4(),
    name: "Default Workflow",
    conditions: [
      {
        id: uuidv4(),
        type: "amount",
        operator: ">=",
        value: 10000,
        department: "marketing",
        actions: [{ type: "Email", recipient: "CMO" }],
      },
      {
        id: uuidv4(),
        type: "amount",
        operator: ">=",
        value: 10000,
        actions: [{ type: "Slack", recipient: "CFO" }],
      },
      {
        id: uuidv4(),
        type: "amount",
        operator: "<",
        value: 5000,
        actions: [{ type: "Slack", recipient: "Finance Team" }],
      },
      {
        id: uuidv4(),
        type: "amount",
        operator: ">=",
        value: 5000,
        managerApproval: true,
        actions: [{ type: "Email", recipient: "Finance Manager" }],
      },
      {
        id: uuidv4(),
        type: "amount",
        operator: ">=",
        value: 5000,
        managerApproval: false,
        actions: [{ type: "Slack", recipient: "Finance Team" }],
      },
    ],
    defaultAction: { type: "Slack", recipient: "Finance Team" },
  },
];

export { workflows };
