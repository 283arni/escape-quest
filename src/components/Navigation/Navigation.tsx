import {FC} from "react";
import classes from './Navigation.module.scss';

const links = [
  {
    href: '#',
    text: 'квесты'
  },
  {
    href: '#',
    text: 'новичкам'
  },
  {
    href: '#',
    text: 'отзывы'
  },
  {
    href: '#',
    text: 'акции'
  },
  {
    href: '#',
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
            <a href={link.href}>{link.text}</a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation;