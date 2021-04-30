import {FC} from "react";
import classes from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.social}>
        <div className={classes.quests}>
          <ul>
            <li><a href="https://www.instagram.com/" target='_blank' aria-label="Сайт instagram"/></li>
            <li><a href="https://www.vk.com/" target='_blank' aria-label="Сайт vk"/></li>
          </ul>
        </div>
        <button type="button" data-modal="feedback"><span>?</span><span>Задать вопрос</span></button>
      </div>
    </footer>
  )
}

export default Footer;
