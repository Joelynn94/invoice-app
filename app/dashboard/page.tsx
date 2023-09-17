import DashboardBar from "@/components/DashboardBar";
import InvoiceList from "@/components/InvoiceList";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardBar />
      <InvoiceList />
    </>
  );
}
