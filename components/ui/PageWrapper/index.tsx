import Head from "next/head";
import _ from "lodash";

// components
import { UIComponents } from "components";

type PageWrapperProps = {
  headTitle: string;
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ headTitle, children }) => {
  const { Header } = UIComponents;
  return (
    <>
      <Head>
        <title>{_.startCase(headTitle)}</title>
        <meta name="description" content="MavenBond - The Strength of Influence Effect" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* consistent menu bar */}
        <Header />

        {/* main body of the page */}
        <main className="flex-grow">{children}</main>

        {/* consistent footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PageWrapper;
