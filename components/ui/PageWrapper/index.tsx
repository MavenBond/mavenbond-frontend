import startCase from "lodash.startcase";

// components
import dynamic from "next/dynamic";
const Header = dynamic(() => import("components/ui/Header"));
const Head = dynamic(() => import("next/head"));

type PageWrapperProps = {
  headTitle: string;
  showNav?: boolean;
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ headTitle = "", showNav = true, children }) => {
  return (
    <>
      <Head>
        <title>{startCase(headTitle)}</title>
        <meta name='description' content='MavenBond - The Strength of Influence Effect' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen flex flex-col'>
        {/* consistent menu bar */}
        {showNav && <Header />}

        {/* main body of the page */}
        <main className='flex-grow'>{children}</main>

        {/* consistent footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PageWrapper;
