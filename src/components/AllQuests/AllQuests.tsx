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


var firebaseConfig = {
  apiKey: "AIzaSyBXPPrT2Jbq3YV63W1OnIlVg-ryXlGidDQ",
  authDomain: "escape-room-29c4d.firebaseapp.com",
  databaseURL: "gs://escape-room-29c4d.appspot.com/",
  storageBucket: "escape-room-29c4d.appspot.com"
};
firebase.initializeApp(firebaseConfig);

const urlNames = [
  'adventure.jpg',
  'adventure.webp',
  'adventure@2x.jpg',
  'adventure@2x.webp',
  'basement.jpg',
  'basement.webp',
  'basement@2x.jpg',
  'basement@2x.webp',
  'experiment.jpg',
  'experiment.webp',
  'experiment@2x.jpg',
  'experiment_2x.webp',
  'ghost.jpg',
  'ghost.webp',
  'ghost@2x.jpg',
  'ghost_2x.webp',
  'last-time.jpg',
  'last-time.webp',
  'last-time@2x.jpg',
  'last-time_2x.webp',
  'maniac.jpg',
  'maniac.webp',
  'maniac@2x.jpg',
  'maniac_2x.webp',
  'mansion.jpg',
  'mansion.webp',
  'mansion@2x.jpg',
  'mansion_2x.webp',
  'marsian.jpg',
  'marsian.webp',
  'marsian@2x.jpg',
  'marsian_2x.webp',
  'metro.jpg',
  'metro.webp',
  'metro@2x.jpg',
  'metro_2x.webp',
  'rite.jpg',
  'rite.webp',
  'rite@2x.jpg',
  'rite_2x.webp',
  'ritual.jpg',
  'ritual.webp',
  'ritual@2x.jpg',
  'ritual_2x.webp'
]

const getUrls = async () => {
  return Promise.all(urlNames.map((name) => {
    return  firebase.storage().ref(`${name}`).getDownloadURL();
  }))
}

console.log(getUrls())

const AllQuests: FC =  () => {

  return (
    <main className="Quests">
      <div className="Container">
        <div className="Quests__wrapper"><span>квесты в Новосибирске</span>
          <h1>Выберите тематику</h1>
          <div className="Quests__tabs swiper-container">
            <form>
              <Tab/>
            </form>
            <div className="Quests__list">
              <ul>
                <li>
                  <a href="#">
                    <div className="Quests__img">
                      <picture>
                        <source srcSet={`${BasementWebpRetina} 1x,${BasementWebpRetina} 2x`} type="image/webp"/>
                        <img src={Basement} srcSet={`${BasementRetina} 2x`} width="344" height="232" alt="Склеп"/>
                      </picture>
                    </div>
                    <div className="Quests__info">
                      <h2>Склеп</h2>
                      <div className="Quests__address">
                        <Location width='11' height='18'/>
                        <span>пр. Ленина, 37</span>
                      </div>
                      <div className="Quests__amount">
                        <Person width="12" height="16"/>
                        <span>2–5 чел</span>
                        <Puzzle width="16" height="16"/>
                        <span>сложный</span>
                      </div>
                    </div>
                    <div className="Quests__hit">
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
