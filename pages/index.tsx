import dynamic from "next/dynamic";

const BannerSection = dynamic(() => import("components/section/home/Banner"));
const AboutSection = dynamic(() => import("components/section/home/About"));
const PageWrapper = dynamic(() => import("components/ui/PageWrapper"));

export default function Home() {
  return (
    <PageWrapper headTitle='Home'>
      <BannerSection />
      <AboutSection />
    </PageWrapper>
  );
}
