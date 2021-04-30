import {FC, CSSProperties} from "react";
import classes from './Navigation.module.scss';
import {NavLink} from "react-router-dom";

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

  const activeClass: CSSProperties = {
    color: '#f2890f'
  }

  return (
    <nav className={classes.navigation}>
      <ul>
        {links.map((link, i) =>
          <li
            key={`${i}-${link.text}`}
          >
            <NavLink activeStyle={activeClass} exact to={link.href}>{link.text}</NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation;
