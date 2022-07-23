import { FC } from "react";
import { infoArticleType } from "../../types";

const InfoArticle: FC<infoArticleType> = ({title, text}) => {
    return (
        <article>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    )
}

export default InfoArticle;