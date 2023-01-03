import dynamic from "next/dynamic";
import Head from "next/head";

const Navbar = dynamic(() => import("components/common/Navbar"));
const HomeBannerSection = dynamic(() => import("components/section/HomeBannerSection"));
const HomeAboutSection = dynamic(() => import("components/section/HomeAboutSection"));

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - MavenBond</title>
        <meta name='description' content='Home - MavenBond' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='pageContainer'>
        <Navbar />
        <HomeBannerSection />
        <HomeAboutSection />
      </div>
    </>
  );
};

export default Home;
