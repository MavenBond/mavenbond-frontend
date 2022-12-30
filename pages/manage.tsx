import dynamic from "next/dynamic";
const PageWrapper = dynamic(() => import("components/ui/PageWrapper"));

export default function Manage() {
  return (
    <PageWrapper headTitle='Manage'>
      <div>Manage</div>
    </PageWrapper>
  );
}
