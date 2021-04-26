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

// const urlNames = [
//   'adventure.jpg',
//   'adventure.webp',
//   'adventure@2x.jpg',
//   'adventure@2x.webp',
//   'basement.jpg',
//   'basement.webp',
//   'basement@2x.jpg',
//   'basement@2x.webp',
//   'experiment.jpg',
//   'experiment.webp',
//   'experiment@2x.jpg',
//   'experiment_2x.webp',
//   'ghost.jpg',
//   'ghost.webp',
//   'ghost@2x.jpg',
//   'ghost_2x.webp',
//   'last-time.jpg',
//   'last-time.webp',
//   'last-time@2x.jpg',
//   'last-time_2x.webp',
//   'maniac.jpg',
//   'maniac.webp',
//   'maniac@2x.jpg',
//   'maniac_2x.webp',
//   'mansion.jpg',
//   'mansion.webp',
//   'mansion@2x.jpg',
//   'mansion_2x.webp',
//   'marsian.jpg',
//   'marsian.webp',
//   'marsian@2x.jpg',
//   'marsian_2x.webp',
//   'metro.jpg',
//   'metro.webp',
//   'metro@2x.jpg',
//   'metro_2x.webp',
//   'rite.jpg',
//   'rite.webp',
//   'rite@2x.jpg',
//   'rite_2x.webp',
//   'ritual.jpg',
//   'ritual.webp',
//   'ritual@2x.jpg',
//   'ritual_2x.webp'
// ]


// set new card
const addNewCard = async (cards: { hit: boolean; address: string; level: string; genres: string[]; name: string; description: string; id: number; time: number; title: string; people: { min: number; max: number } }[]): Promise<void> => {
  await firebase.firestore().collection("cards").doc(cards[0].name).set(cards[0])
}


// const getArr = async () => {
//     return  await firebase
//       .storage()
//       .ref()
//       .list()
// };
//
// const getUrls = async () => {
//
//   const d = await getArr().then((ref) => ref.items.map(item => item.getDownloadURL()));
//   console.log(d)
// }
//
// console.log(getUrls())

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
