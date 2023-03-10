import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function Contactform() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3zjhooo",
        "template_tvo85zj",
        form.current,
        "L6YuIfew64tk-QKpG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name here..."
        />

        <input type="email" name="user_email" placeholder="enter your email" />

        <textarea name="message" placeholder="write your message here" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contactform;
