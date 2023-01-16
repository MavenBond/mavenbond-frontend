import dynamic from "next/dynamic";
import { ROUTES } from "routes";
import { useAuth } from "context/useAuth";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const BrowseEventContainer = dynamic(() => import("components/section/BrowseEventContainer"));
const BrowseInfluencerContainer = dynamic(
  () => import("components/section/BrowseInfluencerContainer")
);
const MobileNoticeWrapper = dynamic(() => import("components/common/MobileNoticeWrapper"));

const Browse = () => {
  const { BROWSE } = ROUTES;
  const { description } = BROWSE;
  const { profile } = useAuth();

  const isBusiness = profile?.user_role === "business";

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer'>
        <Navbar />
        <MobileNoticeWrapper>
          <div className='flex flex-col h-screen'>
            <div className='h-[90px]' />
            {isBusiness ? <BrowseInfluencerContainer /> : <BrowseEventContainer />}
          </div>
        </MobileNoticeWrapper>
      </main>
    </>
  );
};

export default Browse;
