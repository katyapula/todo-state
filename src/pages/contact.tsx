import React, { useState } from "react";
import styles from "../App.module.css";

type ContactProps = {};

export default function Contact({}: ContactProps) {
  const [touched, setTouched] = useState(false);

  const initialValues = {
    type: "",
    name: "",
    urgency: "blocker",
    message: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleChange = (field: string, value: string) =>
    setValues({ ...values, [field]: value });
  const onSubmit = (e: React.FormEvent) => {
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
              onChange={(e) => handleChange("type", e.target.value)}
            />
            <span>Suggestion</span>
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="bugReport"
              onChange={(e) => handleChange("type", e.target.value)}
            />
            <span>Bug report</span>
          </label>
          {!values.type && touched && <div className={styles.error}>Error</div>}
        </fieldset>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {!values.name && touched && <div className={styles.error}>Error</div>}
        </div>

        <div>
          <label htmlFor="urgency">Urgency</label>
          <select
            name="urgency"
            id="urgency"
            value={values.urgency}
            onChange={(e) => handleChange("urgency", e.target.value)}
          >
            <option value="blocker">Blocker</option>
            <option value="major">Major</option>
            <option value="minor">Minor</option>
          </select>
          {!values.urgency && touched && (
            <div className={styles.error}>Error</div>
          )}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
          ></textarea>
          {!values.message && touched && (
            <div className={styles.error}>Error</div>
          )}
        </div>

        <button type="submit" className={styles["rainbow-button"]}>
          Submit
        </button>
      </form>
    </div>
  );
}
