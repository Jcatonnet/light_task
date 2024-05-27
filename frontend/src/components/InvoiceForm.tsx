import React, { useState } from "react";
import { convertToNumber, isValidAmount } from "@/utils/validator";
import { submitInvoice } from "@/services/api";

const InvoiceForm: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [department, setDepartment] = useState<string>("finance");
  const [managerApproval, setManagerApproval] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isValidAmount(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const numericAmount = convertToNumber(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    try {
      const data = await submitInvoice({
        amount: numericAmount,
        department,
        managerApproval,
      });
      console.log("Action:", data.message);
      alert(data.message);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <label className="block text-sm font-medium text-secondary">
          Amount in $:
        </label>
        <input
          type="text"
          placeholder=" Enter invoice value"
          value={amount}
          onChange={handleAmountChange}
          className="mt-1 block w-full border border-secondary rounded-md shadow-sm sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary">
          Department:
        </label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="mt-1 block w-full border border-secondary rounded-md shadow-sm sm:text-sm"
        >
          <option value="finance">Finance</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="hr">HR</option>
          <option value="it">IT</option>
        </select>
      </div>
      <div className="flex align-center">
        <label className="block text-sm font-medium text-secondary">
          Manager Approval Required:
        </label>
        <input
          type="checkbox"
          checked={managerApproval}
          onChange={(e) => setManagerApproval(e.target.checked)}
          className="ml-2 block"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default InvoiceForm;
