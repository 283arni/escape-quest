import {FC, SetStateAction, useEffect, useState} from "react";
import {ReactComponent as Location} from "../../img/icons/location.svg";
import {ReactComponent as Person} from "../../img/icons/person.svg";
import {ReactComponent as Puzzle} from "../../img/icons/puzzle.svg";
import {ReactComponent as Star} from "../../img/icons/star.svg";
import Tab from "../Tab/Tab";
import classes from './AllQuests.module.scss'
import {getQuests} from "../../api";
import {questType} from "../../types";



const AllQuests: FC =  () => {


  const [quests, setQuests] = useState<SetStateAction<any>>([]);


  useEffect(() => {
    const fetchFirestoreQuests = async () => {
      try {
        const response = await getQuests();
        const quests = response.docs.map(doc => doc.data());

        setQuests(quests);
      } catch (e) {
        throw new Error(`Ошибка при запросе, ${e}`);
      }
    }

    fetchFirestoreQuests();
  }, [])

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
                {quests.map((quest: questType) => {
                  const {jpgFormat, jpgFormatRetina, webpFormatRetina, webpFormat} = quest.pictures;
                  const {min, max} = quest.people;

                  return (
                    <li key={quest.id}>
                      <a href="#">
                        <div className={classes.img}>
                          <picture>
                            <source srcSet={`${webpFormat} 1x,${webpFormatRetina} 2x`} type="image/webp"/>
                            <img src={jpgFormat} srcSet={`${jpgFormatRetina} 2x`} width="340" height="232" alt={quest.title}/>
                          </picture>
                        </div>
                        <div className={classes.info}>
                          <h2>{quest.title}</h2>
                          <div className={classes.address}>
                            <Location width='11' height='18'/>
                            <span>{quest.address}</span>
                          </div>
                          <div className={classes.amount}>
                            <Person width="12" height="16"/>
                            <span>{`${min}–${max} чел`}</span>
                            <Puzzle width="16" height="16"/>
                            <span>{quest.level}</span>
                          </div>
                        </div>
                        {
                          quest.hit ?
                          <div className={classes.hit}>
                            <Star width="12" height="12" />
                            <span>Хит</span>
                          </div>
                          : null
                        }
                      </a>
                    </li>
                  )
                }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AllQuests;
