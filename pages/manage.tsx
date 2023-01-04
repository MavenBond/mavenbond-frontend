import dynamic from "next/dynamic";
import { ROUTES } from "routes";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));

const Manage = () => {
  const { MANAGE } = ROUTES;
  const { description } = MANAGE;

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer'>
        <Navbar />
      </main>
    </>
  );
};

export default Manage;
