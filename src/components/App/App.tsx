import {FC} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import classes from "./App.module.scss";
import AllQuests from "../AllQuests/AllQuests";


const App: FC = () => {

  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <Header/>
        <Switch>
          <Route exact  path='/' component={Hero}/>
          <Route path='/quests' component={AllQuests}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
