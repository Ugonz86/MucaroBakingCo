import React from "react";
import "../App.css";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import { API } from "aws-amplify";
import { createCustomer } from "../graphql/mutations";

// import Amplify from '@aws-amplify/core'
// import config from '../aws-exports'
// Amplify.configure(config)

function Contact() {
  const [formState, setFormState] = React.useState({
    reason: "",
    name: "",
    email: "",
    message: "",
  });

  // const add = reason.map(add => add);

  const onSubmit = async (e) => {
    e.preventDefault();
    // e.target.reset();
    // const { reason, name, email, message } = formState;
    const { name, email, reason, message } = formState;
    if (name && email && reason &&  message) {
      try {
        await API.graphql(
          {
            query: createCustomer,
            variables: {
              input: {
                reason,
                name,
                email,
                message,
              },
            },
          },
          console.log("something is working")
        ).then(alert("Your message has been submitted. Thank you!"));
      } catch (error) {
        console.error(error, "Error!");
      }
    } else {
      console.log("not sure whats happening");
    }
    formState("");
  };

  return (
    <div className="Contact">
      <div className="form-container">
        <h3 className="title">
          CONTACT MÚCARO
        </h3>
        {/* <div className="contact-container"> */}
        <h4>Say Hello!</h4>
        <p>
          I'll reach out as soon as possible.
          <br /> Please fill out the form below if:
        </p>
        <ul>
          <li>You would like to place a special order </li>
          <li>
            You have a question that is not addressed in the{" "}
            <Link to="/faqs" className="faqLink">
              Frequently Asked Questions (FAQs)
            </Link>{" "}
            section
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
            placeholder="Your Full Name"
            value={formState.name || []}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            required
          />

          <label>Email</label>
          <input
            type="email"
            // id="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            required
          />

          <label>Reason</label>
          <select
            className="contactSelect"
            value={formState.reason}
            onChange={(e) =>
              setFormState({ ...formState, reason: e.target.value })
            }
            required
            multiple={false}
          >
            <optgroup>
              <option hidden disabled value="">
                Select Option
              </option>
              <option value="Special Offer">Special Offer</option>
              <option value="Inquiry">Inquiry</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </optgroup>
          </select>

          <label>Message</label>
          <textarea
            name="message"
            value={formState.message}
            className="message"
            placeholder="Your Message"
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
