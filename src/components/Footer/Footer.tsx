import {FC} from "react";

const Footer: FC = () => {
  return (
    <footer className="Footer">
      <div className="Footer__social">
        <div className="Footer__links">
          <ul>
            <li><a href="https://www.instagram.com/" aria-label="Сайт instagram"></a></li>
            <li><a href="https://www.vk.com/" aria-label="Сайт vk"></a></li>
          </ul>
        </div>
        <button type="button" data-modal="feedback"><span>?</span><span>Задать вопрос</span></button>
      </div>
    </footer>
  )
}

export default Footer;