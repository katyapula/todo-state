import React, { useState } from "react";
import styles from "../App.module.css";

type ContactProps = {};

export default function Contact({}: ContactProps) {
  const [touched, setTouched] = useState(false);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [urgency, setUrgency] = useState("blocker");
  const [message, setMessage] = useState("");
  const handleType = (event: any) => setType(event.target.value);
  const handleName = (event: any) => setName(event.target.value);
  const handleUrgency = (event: any) => setUrgency(event.target.value);
  const handleMessage = (event: any) => setMessage(event.target.value);
  const onSubmit = (e: any) => {
    e.preventDefault();
    setTouched(true);
  };
  return (
    <div>
      <h1>Contact us</h1>
      <form onSubmit={onSubmit} className={styles.contactForm}>
        <fieldset>
          <legend>Select type of message</legend>
          <label>
            <input
              type="radio"
              name="type"
              value="suggestion"
              onChange={handleType}
            />
            <span>Suggestion</span>
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="bugReport"
              onChange={handleType}
            />
            <span>Bug report</span>
          </label>
          {!type && touched && <div className={styles.error}>Error</div>}
        </fieldset>

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleName} />
          {!name && touched && <div className={styles.error}>Error</div>}
        </div>

        <div>
          <label htmlFor="urgency">Urgency</label>
          <select name="urgency" id="urgency" onChange={handleUrgency}>
            <option value="blocker">Blocker</option>
            <option value="major">Major</option>
            <option value="minor">Minor</option>
          </select>
          {!urgency && touched && <div className={styles.error}>Error</div>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={handleMessage}
          ></textarea>
          {!message && touched && <div className={styles.error}>Error</div>}
        </div>

        <button type="submit" className={styles["rainbow-button"]}>
          Submit
        </button>
      </form>
    </div>
  );
}
