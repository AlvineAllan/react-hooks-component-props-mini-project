import react from "react";

function Article({ title, date, preview, minutes})  {
    const defaultDate = "January 1, 1970";
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date || defaultDate}</small>
            <p>{preview}</p>
            <p>{`Estimated Reading Time: ${minutes} minutes `}</p>
        </article>
    );
}

export default Article;