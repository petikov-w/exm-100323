import {Link} from "react-router-dom";

const a404 = {
    color: "blue",
    textDecoration: "underline"
}
const Notfoundpage = () => {
    return (
        <div className="main">
            <h1>404 </h1>
            <p>
              Запрашиваемая Вами страница не найдена. Перейдите на <Link style={a404} to="/">главную страницу</Link>
            </p>

        </div>
    )
}

export {Notfoundpage}