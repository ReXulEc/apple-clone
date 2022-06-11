import { Navbar } from "@components/Navbar";
import { Unicef } from "@components/Unicef";
import { Main } from "@components/main";
import { Footer } from "@components/Footer"

const Home = () => {
  return (
      <div className="">
        <Navbar />
        <Unicef />
        <Main />
        <Footer />
      </div>
  );
};

export default Home;
