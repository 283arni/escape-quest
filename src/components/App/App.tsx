import {FC} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
<<<<<<< HEAD
import classes from "./App.module.scss";
=======
import AllQuests from "../AllQuests/AllQuests";
>>>>>>> 3d300c0567ce72416126e621a596adb33b72d9b8

const App: FC = () => {

  return (
<<<<<<< HEAD
    <div className={classes.wrapper}>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
=======
    <BrowserRouter>
      <div className="Wrapper">
        <Header/>
        <Switch>
          <Route exact  path='/' component={Hero}/>
          <Route path='/quests' component={AllQuests}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
>>>>>>> 3d300c0567ce72416126e621a596adb33b72d9b8
  );
}

export default App;
