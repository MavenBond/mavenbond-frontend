import dynamic from "next/dynamic";
import { ROUTES } from "routes";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const BrowseContainer = dynamic(() => import("components/section/BrowseContainer"));

const Browse = () => {
  const { BROWSE } = ROUTES;
  const { description } = BROWSE;

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer'>
        <Navbar />
        <BrowseContainer />
      </main>
    </>
  );
};

export default Browse;
