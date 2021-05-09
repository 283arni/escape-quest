import firebase from "firebase";
import DocumentData = firebase.firestore.DocumentData;

export type questType = {
  hit: boolean;
  address: string;
  level: string;
  genres: string[];
  name: string;
  description: string;
  id: number;
  time: number;
  title: string;
  people: {
    min: number;
    max: number;
  },
  pictures: {
    jpgFormat: string;
    jpgFormatRetina: string;
    webpFormat: string;
    webpFormatRetina: string;
  }
} | DocumentData

export type tabType = {
  id: string;
  title: string;
  icon: JSX.Element;
}

export type activeQuestsType = {
  activeTab: string,
  sortedQuests: [] | questType[]
}

export type timeType = {
  time: string;
  price: string;
  reserved: boolean;
}
