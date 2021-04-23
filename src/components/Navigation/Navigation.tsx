import {FC} from "react";
<<<<<<< HEAD
import classes from './Navigation.module.scss';
=======
import {NavLink} from "react-router-dom";
>>>>>>> 3d300c0567ce72416126e621a596adb33b72d9b8

const links = [
  {
    href: '/quests',
    text: 'квесты'
  },
  {
    href: '/noobs',
    text: 'новичкам'
  },
  {
    href: '/reviews',
    text: 'отзывы'
  },
  {
    href: '/sale',
    text: 'акции'
  },
  {
    href: '/contacts',
    text: 'контакты'
  },
]

const Navigation: FC = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        {links.map((link, i) =>
          <li
            key={`${i}-${link.text}`}
          >
            <NavLink exact to={link.href}>{link.text}</NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation;
