
import {FaPhone, FaEnvelope} from "react-icons/fa"
const Contacts = () => {
    return (
        <>
         
        <section className="contacts">
        <h1> Contact Me</h1> 
        <ul>
            <li><a href="tel:01124098763"><FaPhone />+(20) 11 240 98763</a>

            </li>
            <li><a href="mailto:ahmedzak19972008@Gmail.com"><FaEnvelope />{" "}ahmedzak19972008@gmail.com</a></li>
            </ul>
        </section>
          
        </>
    )
}

export default Contacts
