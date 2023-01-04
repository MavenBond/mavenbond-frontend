import dynamic from "next/dynamic";
import { useEffect } from "react";
import { ROUTES } from "routes";
import { getSessionData } from "supabase/supbaseClient";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const HomeBannerSection = dynamic(() => import("components/section/HomeBannerSection"));
const HomeAboutSection = dynamic(() => import("components/section/HomeAboutSection"));

const Home = () => {
  const { HOME } = ROUTES;
  const { description } = HOME;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getSessionData();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
