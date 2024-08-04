import html from "../assets/html.png";
import css from "../assets/css.webp";
import js from "../assets/JS.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import django from "../assets/django.png";
import react from "../assets/react.svg";

const CartaPresentacion = () => {
  return (
    <>
    <h1>{"<"} Soy Martín Hasmat {"/>"}</h1>
    <div className="description">
        <p>
            <h3>Soy estudiante de programación<br/>
                y aspiro a convertirme en Full Stack Developer!
            </h3>
            <h4>Entre mis habilidades como desarrollador,<br />
                cuento con las siguientes tecnologías aprendidas:
            </h4>
        </p>
    </div>
    <div className="card">     
        <ul>
            <li>                
                <h4>HTML</h4>
                <img src={html} alt="HTML" width="70"/>                
            </li>
            <li>
                <h4>CSS</h4>
                <img src={css} alt="CSS" width="60"/>
            </li>
            <li>
                <h4>Javascript</h4>
                <img src={js} alt="JS" width="65"/>
            </li>
            <li>
                <h4>Git</h4>
                <img src={git} alt="git" width="120"/>             
            </li>
            <li>
                <h4>Github</h4>                
                <img src={github} alt="github" width="50"/>
            </li>
            <li>
                <h4>Python</h4>
                <img src={python} alt="python" width="50"/>
            </li>
            <li>
                <h4>Django</h4>
                <img src={django} alt="django" width="50"/>
            </li>
            <li>actualmente cursando
                <h4>React JS</h4>
                <img src={react} alt="react" width="50"/>
            </li>
        </ul>     
    </div>
    </>
  )
}

export default CartaPresentacion