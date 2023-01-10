import dynamic from "next/dynamic";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const MobileNoticeWrapper = dynamic(() => import("components/common/MobileNoticeWrapper"));
const DashboardCalendar = dynamic(() => import("components/bypage/DashboardCalendar"));

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
              <div className='flex flex-col flex-1'>Number cards</div>
              <div className='flex flex-col w-[32rem] border-l-[2px] dark:border-gray-200/20'>
                <h2 className='pl-10 pt-6 font-bold text-[2rem]'>Ads Schedule</h2>
                <DashboardCalendar />
              </div>
            </div>
          </div>
        </MobileNoticeWrapper>
      </main>
    </>
  );
};

export default Dashboard;
