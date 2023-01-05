import dynamic from "next/dynamic";
import { ROUTES } from "routes";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));

const Profile = () => {
  const { PROFILE } = ROUTES;
  const { description } = PROFILE;

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer'>
        <Navbar />
      </main>
    </>
  );
};

export default Profile;
