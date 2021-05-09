import {FC, useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import Home from "../../pages/Home/Home";
import Quests from "../../pages/Quests/Quests";
import Quest from "../../pages/Quest/Quest";
import Timetable from "../../pages/Timetable/Timetable";

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
          <Route exact  path='/' component={Home}/>
          <Route exact path='/quest' component={Quest}/>
          <Route path='/quests' component={Quests}/>
          <Route path='/timetable' component={Timetable}/>
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
