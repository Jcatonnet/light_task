export interface Action {
  type: string;
  recipient: string;
}

export interface Condition {
  id: string;
  type: "amount" | "department" | "managerApproval";
  operator?: ">=" | "<";
  value: number | string;
  department?: string;
  managerApproval?: boolean;
  actions: Action[];
}

export interface Workflow {
  id: string;
  name: string;
  conditions: Condition[];
  defaultAction: Action;
}

export interface WorkflowParams {
  amount: string;
  department: string;
  managerApproval: boolean;
}

export interface Invoice {
  id: string;
  amount: number;
  department: string;
  managerApproval: boolean;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}
