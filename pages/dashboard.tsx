import dynamic from "next/dynamic";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));

const Dashboard = () => {
  return (
    <>
      <Helmet title='Dashboard - MavenBond' description='Dashboard - MavenBond' />
      <main className='pageContainer'>
        <Navbar />
      </main>
    </>
  );
};

export default Dashboard;