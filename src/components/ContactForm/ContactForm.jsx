import Buttons from "../Buttons/Buttons";
import styles from "./Contact.module.css";
import {MdMessage} from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {
 const [name,setName]=useState("anshu");
 const [email,setEmail]=useState("simran@gmail.com");
 const [text,setText]=useState("anshuehbc");



  const onSubmit=(event)=>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };


  return (
  <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
    <Buttons text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
    <Buttons text="VIA CALL" icon={<IoMdCall fontSize="24px"/>} />
  
    </div>
    <Buttons 
    isOutline={true}
    text="VIA EMAIL FORM" icon={<MdMessage fontSize="24px"/>} />
   
    <form

    onSubmit={onSubmit}>
    <div className={styles.form_control}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name"></input>
    </div>

    <div className={styles.form_control}>
    <label htmlFor="email">Email</label>
    <input type="email" name="email"></input>
    </div>


    <div className={styles.form_control}>
    <label htmlFor="text">Text</label>
    <textarea name="text" rows="8"></textarea>
    </div>

   <div style={{display:"flex",
    justifyContent:"end"
   }}>
   <Buttons 
    text="SUBMIT"  />
   </div>

   <div>
    {
      name + " " + email + " "  +text
    }
   </div>
    </form>


    </div>
    <div className={styles.contact_image}>

      <img src="./images/contact.svg"/>
    </div>
  </section>
  
  );
};

export default ContactForm;
