import firebase from "firebase/app";
import 'firebase/firestore';
import {cards} from "./data/cards";

import {questType} from "./types";

firebase.initializeApp({
  apiKey: "AIzaSyBXPPrT2Jbq3YV63W1OnIlVg-ryXlGidDQ",
  authDomain: "escape-room-29c4d.firebaseapp.com",
  databaseURL: "gs://escape-room-29c4d.appspot.com/",
  storageBucket: "escape-room-29c4d.appspot.com",
  projectId: "escape-room-29c4d",
});

const firestore = firebase.firestore();


export const setNewQuests = (cards: questType[]) => {
  cards.forEach((card: questType) => {
    firestore.collection("cards").doc(card.name).set(card);
  })
}

export const getQuests = () => {
 return firestore.collection("cards").get();
}
