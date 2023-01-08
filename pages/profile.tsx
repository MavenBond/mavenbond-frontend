import dynamic from "next/dynamic";
import { ROUTES } from "routes";

const Helmet = dynamic(() => import("components/common/Helmet"));
const Navbar = dynamic(() => import("components/common/Navbar"));
const ProfileForm = dynamic(() => import("components/bypage/ProfileForm"));

const Profile = () => {
  const { PROFILE } = ROUTES;
  const { description } = PROFILE;

  return (
    <>
      <Helmet title={description} description={description} />
      <main className='pageContainer scrollbar-hide'>
        <Navbar />
        <ProfileForm />
      </main>
    </>
  );
};

export default Profile;
