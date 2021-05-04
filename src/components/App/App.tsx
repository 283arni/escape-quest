import {FC, SetStateAction, useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import AllQuests from "../AllQuests/AllQuests";
import Popup from "../Popup/Popup";

import classes from "./App.module.scss";

const App: FC = () => {
  const [name, setName] = useState('');

  const handleOpenPopupClick = (name: string): void => {
    setName(name);
  }

  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <Header
          onOpenPopupClick={handleOpenPopupClick}
        />
        <Switch>
          <Route exact  path='/' component={Hero}/>
          <Route path='/quests' component={AllQuests}/>
        </Switch>
        <Footer
          onOpenPopupClick={handleOpenPopupClick}
        />
        {name ?
          <Popup
            name={name}
            onOpenPopupClick={handleOpenPopupClick}
          /> :
          null
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
