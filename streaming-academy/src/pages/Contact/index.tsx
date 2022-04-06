
import { MockContact } from "../../Mocks";
import './index.css'

const Contact = () => {
  return (
    <>
     <h1 className="title">Nosso Time</h1>
    <div className="container-contacts">
     
      {MockContact.map((contact)=>(
        <a href={contact.link} className="contacts" target='_blank'>
           <h3 className="contact">{contact.name}</h3> 
          <img className="photo" src={contact.img}/>
        </a>
      ))}
    </div>
  </>
  )}

export default Contact;