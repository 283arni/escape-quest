import {FC} from "react";
import classes from "./Feedback.module.scss";

const Feedback: FC = () => {
  return (
    <div className={classes.content}>
      <h2>Задайте вопрос</h2>
      <form>
        <div className={classes.name}>
          <div>Чтобы мы смогли обращаться к вам, оставьте ваше имя</div>
          <input type="text" id="name" placeholder="Петя" minLength={3} required/>
          <label htmlFor="name">Имя</label>
          <span id="error-name"/>
        </div>
        <div className={classes.mail}>
          <div>Чтобы вы получили ответ, оставьте ваш e-mail</div>
          <input id="mail" type="email" placeholder="petiy-the-best@mail.ru" minLength={6} required/>
          <label htmlFor="mail">E-mail</label>
          <span id="error-mail"/>
        </div>
        <div className={classes.text}>
          <label htmlFor="text">
            Ваш вопрос:
            <textarea id="text" placeholder="Начните вводить ..." maxLength={300}/>
          </label>
          <button>отправить вопрос</button>
        </div>
        <div className={classes.check}>
          <input type="checkbox" id="check"/>
          <label htmlFor="check" id="check-label"/>
          <p>Я согласен с <a href="#">правилами обработки персональных данных</a> и пользовательским соглашением</p>
          <span id="error-check"/>
        </div>
      </form>
    </div>
  )
}

export default Feedback;