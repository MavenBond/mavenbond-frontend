import dynamic from "next/dynamic";
import IntroStyles from "styles/Intro.module.css";

const IntroForm = dynamic(() => import("components/bypage/IntroForm"));
const ThemeToggle = dynamic(() => import("components/common/ThemeToggle"));
const BgCircles = dynamic(() => import("components/common/BgCircles"));

const Intro = () => {
  return (
    <div className='pageContainer'>
      <div className={IntroStyles.introContent}>
        <BgCircles />
        <ThemeToggle
          className='
            absolute top-[2rem] right-[2rem] 
            text-violet-700 dark:text-amber-500'
        />
        <h1 className={IntroStyles.mainTitle}>
          Cheers! Welcome to MavenBond,
          <div className='text-pink-500'>Andrew Le Nguyen ✨</div>
          <div>
            You're looking for <span className='tracking-wide'>...</span>
          </div>
        </h1>
        <IntroForm />
      </div>
    </div>
  );
};

export default Intro;
