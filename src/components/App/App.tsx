import {FC} from 'react';
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import classes from "./App.module.scss";

const App: FC = () => {

  return (
    <div className={classes.wrapper}>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
