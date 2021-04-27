import {FC} from "react";
import firebase from "firebase";
import {ReactComponent as Location} from "../../img/icons/location.svg";
import {ReactComponent as Person} from "../../img/icons/person.svg";
import {ReactComponent as Puzzle} from "../../img/icons/puzzle.svg";
import {ReactComponent as Star} from "../../img/icons/star.svg";
import Basement from "../../img/quests/basement.jpg";
import BasementRetina from "../../img/quests/basement@2x.jpg";
import BasementWebp from "../../img/quests/basement.webp";
import BasementWebpRetina from "../../img/quests/basement@2x.webp";
import Tab from "../Tab/Tab";
import classes from './AllQuests.module.scss'
import {cards} from "../../cards";


const firebaseConfig = {
  apiKey: "AIzaSyBXPPrT2Jbq3YV63W1OnIlVg-ryXlGidDQ",
  authDomain: "escape-room-29c4d.firebaseapp.com",
  databaseURL: "gs://escape-room-29c4d.appspot.com/",
  storageBucket: "escape-room-29c4d.appspot.com",
  projectId: "escape-room-29c4d",
};

firebase.initializeApp(firebaseConfig);

// set new card
const addNewCard = (cards: { hit: boolean; address: string; level: string; genres: string[]; name: string; description: string; id: number; time: number; title: string; people: { min: number; max: number } }[]): void => {
  cards.forEach((card) => {
    firebase.firestore().collection("cards").doc(card.name).set(card)
  })
}




const AllQuests: FC =  () => {

  return (
    <main className={classes.quests}>
      <div className={classes.container}>
        <div className={classes.wrapper}><span>квесты в Новосибирске</span>
          <h1>Выберите тематику</h1>
          <div className={classes.tabs}>
            <form>
              <Tab/>
            </form>
            <div className={classes.list}>
              <ul>
                <li>
                  <a href="#">
                    <div className={classes.img}>
                      <picture>
                        <source srcSet={`${BasementWebpRetina} 1x,${BasementWebpRetina} 2x`} type="image/webp"/>
                        <img src={Basement} srcSet={`${BasementRetina} 2x`} width="344" height="232" alt="Склеп"/>
                      </picture>
                    </div>
                    <div className={classes.info}>
                      <h2>Склеп</h2>
                      <div className={classes.address}>
                        <Location width='11' height='18'/>
                        <span>пр. Ленина, 37</span>
                      </div>
                      <div className={classes.amount}>
                        <Person width="12" height="16"/>
                        <span>2–5 чел</span>
                        <Puzzle width="16" height="16"/>
                        <span>сложный</span>
                      </div>
                    </div>
                    <div className={classes.hit}>
                      <Star width="12" height="12" />
                      <span>Хит</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AllQuests;
