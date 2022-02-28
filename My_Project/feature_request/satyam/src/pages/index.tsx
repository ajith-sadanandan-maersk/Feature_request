import Header from "@/components/nav";
import Footer from '../components/footer';
import Page from '../components/page';
import type { NextPage } from "next";
import GlobalStyle from "@styles/globalStyles";

const Home: NextPage = () => {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Page/>
    {/* <Footer/> */}
    </>
   );
};

export default Home;
