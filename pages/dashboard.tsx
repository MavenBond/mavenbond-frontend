import dynamic from "next/dynamic";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const MobileNoticeWrapper = dynamic(() => import("components/common/MobileNoticeWrapper"));
const DashboardCardsColumn = dynamic(() => import("components/section/DashboardCardsColumn"));
const DashboardScheduleColumn = dynamic(() => import("components/section/DashboardScheduleColumn"));

const Dashboard = () => {
  return (
    <>
      <Helmet title='Dashboard - MavenBond' description='Dashboard - MavenBond' />
      <main className='pageContainer'>
        <Navbar />
        <MobileNoticeWrapper>
          <div className='flex flex-col h-screen'>
            <div className='h-[90px]' />
            <div className='excludeNavContent flex'>
              <DashboardCardsColumn />
              <DashboardScheduleColumn />
            </div>
          </div>
        </MobileNoticeWrapper>
      </main>
    </>
  );
};

export default Dashboard;
