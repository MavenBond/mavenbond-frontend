import dynamic from "next/dynamic";
const PageWrapper = dynamic(() => import("components/ui/PageWrapper"));

export default function Report() {
  return (
    <PageWrapper headTitle='Report'>
      <div>Report</div>
    </PageWrapper>
  );
}
