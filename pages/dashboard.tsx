import dynamic from "next/dynamic";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const MobileNoticeWrapper = dynamic(() => import("components/common/MobileNoticeWrapper"));

const Dashboard = () => {
  return (
    <>
      <Helmet title='Dashboard - MavenBond' description='Dashboard - MavenBond' />
      <main className='pageContainer'>
        <Navbar />
        <MobileNoticeWrapper>
          <div className='excludeNavContent'>Dashboard test content</div>
        </MobileNoticeWrapper>
      </main>
    </>
  );
};

export default Dashboard;
