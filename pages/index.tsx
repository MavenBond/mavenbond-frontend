import { HomeSections } from "components/section";
import { PageWrapper } from "components/ui";

export default function Home() {
  return (
    <PageWrapper headTitle='Home'>
      <HomeSections.Banner />
      <HomeSections.About />
    </PageWrapper>
  );
}
