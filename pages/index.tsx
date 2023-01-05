import dynamic from "next/dynamic";
import { ROUTES } from "routes";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const HomeBannerSection = dynamic(() => import("components/section/HomeBannerSection"));
const HomeAboutSection = dynamic(() => import("components/section/HomeAboutSection"));

const Home = () => {
  const { HOME } = ROUTES;
  const { description } = HOME;

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer'>
        <Navbar />
        <HomeBannerSection />
        <HomeAboutSection />
      </main>
    </>
  );
};

export default Home;
