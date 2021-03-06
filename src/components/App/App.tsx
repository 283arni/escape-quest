import {FC} from 'react';
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

const App: FC = () => {

  return (
    <div className="Wrapper">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
