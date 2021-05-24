import {FaLinkedin, FaGithub} from "react-icons/fa"
const Homepage = () => {
    return (
        <>
        <section className="homepage">
        <div className="overlay">
        
        <h1>Zak's Code</h1>
        <p>
            DevOps Engineer,Full Stack Developer
        </p>
        <ul>
            <li><a href="https://www.linkedin.com/in/ahmed-zakaria-20184a146/" target="_blank" rel="noopenner noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://github.com/ahmedzak7" target="_blank" rel="noopenner noreferrer"><FaGithub /></a></li>
        </ul>
        </div>
        </section>
            
        </>
    )
}

export default Homepage
