import dynamic from "next/dynamic";
const PageWrapper = dynamic(() => import("components/ui/PageWrapper"));

export default function Browse() {
  return (
    <PageWrapper headTitle='Browse'>
      <div>Browse</div>
    </PageWrapper>
  );
}
