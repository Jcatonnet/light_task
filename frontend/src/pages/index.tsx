import InvoiceForm from "@/components/InvoiceForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="border-2 border-primary bg-tertiary rounded-xl p-8">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Invoice Approval
        </h1>
        <InvoiceForm />
      </div>
    </main>
  );
}
