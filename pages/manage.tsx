import dynamic from "next/dynamic";
import { ROUTES } from "routes";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const MobileNoticeWrapper = dynamic(() => import("components/common/MobileNoticeWrapper"));

const Manage = () => {
  const { MANAGE } = ROUTES;
  const { description } = MANAGE;

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer'>
        <Navbar />
        <MobileNoticeWrapper>
          <div className='excludeNavContent'>Manage test content</div>
        </MobileNoticeWrapper>
      </main>
    </>
  );
};

export default Manage;
