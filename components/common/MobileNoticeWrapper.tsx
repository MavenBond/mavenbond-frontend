import { useWindowWidth } from "@react-hook/window-size/throttled";

const MobileNoticeWrapper = ({ children }: { children: React.ReactElement }) => {
  const windowWidth = useWindowWidth();
  if (windowWidth <= 1024)
    return (
      <div className='h-screen w-screen flex items-center justify-center animate-fadeIn'>
        <h1 className='text-base md:text-[1.6rem] break-words text-justify italic px-10 md:leading-10'>
          Opps! Our <span className='text-pink-500 font-bold'>mobile and tablet</span> versions for
          this page is currently not available. Please kindly continue using our services on
          <span className='text-pink-500 font-bold'> desktop/web app</span> version for the best
          experience. Thank you for your understanding ❤️
        </h1>
      </div>
    );
  return children;
};

export default MobileNoticeWrapper;
