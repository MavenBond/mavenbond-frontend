import { UIComponents, Sections } from "components";

export default function Home() {
  const { PageWrapper } = UIComponents;
  const { HomeSections } = Sections;

  return (
    <PageWrapper headTitle="Home">
      <HomeSections.Banner />
      <HomeSections.About />
    </PageWrapper>
  );
}
