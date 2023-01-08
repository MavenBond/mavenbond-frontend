import dynamic from "next/dynamic";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const DashboardEventSection = dynamic(() => import("components/section/DashoardEventSection"));
const DashboardUserSection = dynamic(() => import("components/section/DashboardUserSection"))

const Dashboard = () => {
  return (
    <>
      <Helmet title='Dashboard - MavenBond' description='Dashboard - MavenBond' />
      <main className='pageContainer'>
        <Navbar />

        <DashboardEventSection />
        <DashboardUserSection />
      </main>
    </>
  );
};

export default Dashboard;
