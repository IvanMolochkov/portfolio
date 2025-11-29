import "./Project.css"
import { NavLink } from "react-router-dom"

function Project({ title, img, index }) {
    return (
        <NavLink to={`/project/${index}`}>
            <li className="project">
                <a href="./project-page.html">
                    <img src={img} alt="Project img" className="project__img" />
                    <h3 className="project__title">{title}</h3>
                </a>
            </li>
        </NavLink>
    )
}

export default Project