import React from "react";
import "../App.css";
import SendIcon from "@mui/icons-material/Send";

import { API } from "aws-amplify";
import { createCustomer } from "../graphql/mutations";

// import Amplify from '@aws-amplify/core'
// import config from '../aws-exports'
// Amplify.configure(config)

function Contact() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = async (data, e) => {
    // e.preventDefault();
    const { name, email, message } = formState;
    if (name && email && message) {
      try {
        await API.graphql({
          query: createCustomer,
          variables: {
            input: {
              name,
              email,
              message,
            },
          },
        }).then(alert("Your message has been submitted. Thank you!"));
      } catch (error) {
        alert(error, "Error");
      }
    }
  };

  return (
    <div className="Contact">
      <div className="form-container">
        <h3 className="title" style={{ color: "#d25876" }}>
          CONTACT MÚCARO
        </h3>
        {/* <div className="contact-container"> */}
        <h4>Say Hello!</h4>
        <p>
          I'll reach out as soon as possible. Please fill out the form below if:
        </p>
        <ul>
          <li>You would like to place a special order </li>
          <li>
            You have a question that is not addressed in the Frequently Asked
            Questions (FAQ) section
          </li>
          <li>
            You would like to share your feedback on the items you've tried,
            past events, the website, social media, etc.{" "}
          </li>
        </ul>
        <p>Thank you!</p>
        {/* </div> */}

        <form className="form" onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            // id="name"
            placeholder="Full Name"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            required
          />

          {/* <label>Last Name</label>
          <input type="text" id="lastName" required /> */}

          <label>Email</label>
          <input
            type="email"
            // id="email"
            placeholder="Email"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formState.message}
            className="message"
            placeholder="Message"
            // value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            required
            // rows={10}
            minLength={20}
            maxLength={1000}
          >
            {formState.message}
          </textarea>

          <button className="send" type="submit">
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
