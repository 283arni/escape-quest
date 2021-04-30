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
    max: number
  },
  pictures: {
    jpgFormat: string,
    jpgFormatRetina: string,
    webpFormat: string,
    webpFormatRetina: string
  }
}
