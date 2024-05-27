export const submitInvoice = async (invoiceData: {
  amount: number;
  department: string;
  managerApproval: boolean;
}) => {
  const response = await fetch("/api/approve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(invoiceData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Unknown error");
  }

  return response.json();
};
