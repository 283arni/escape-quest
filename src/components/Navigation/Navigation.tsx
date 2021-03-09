import {FC} from "react";
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
  return (
    <nav className="Navigation">
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
