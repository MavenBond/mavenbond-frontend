import dynamic from "next/dynamic";
import { ROUTES } from "routes";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const BrowseEventContainer = dynamic(() => import("components/section/BrowseEventContainer"));
const MobileNoticeWrapper = dynamic(() => import("components/common/MobileNoticeWrapper"));

const Browse = () => {
  const { BROWSE } = ROUTES;
  const { description } = BROWSE;

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer'>
        <Navbar />
        <MobileNoticeWrapper>
          <div className='flex flex-col h-screen'>
            <div className='h-[90px]' />
            <BrowseEventContainer />
          </div>
        </MobileNoticeWrapper>
      </main>
    </>
  );
};

export default Browse;
