import dynamic from "next/dynamic";
import { ROUTES } from "routes";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));

const Report = () => {
  const { REPORT } = ROUTES;
  const { description } = REPORT;

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer'>
        <Navbar />
      </main>
    </>
  );
};

export default Report;
