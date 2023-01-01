import dynamic from "next/dynamic";
const Link = dynamic(() => import("next/link"));

const Copyright = () => {
  return (
    <div className='copyright'>
      <Link href='/' prefetch={false}>
        <strong>Home </strong>
      </Link>
      <Link href='/#about-us' prefetch={false}>
        |<strong> About Us </strong>
      </Link>
      | © 2022 <strong>MavenBond</strong>
      <span className='xs:hidden sm:hidden'>. All Rights Reserved</span>
    </div>
  );
};

export default Copyright;