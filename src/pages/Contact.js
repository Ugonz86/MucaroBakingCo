import "../App.css";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
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

        <form className="form">
          <label>Name</label>
          <input type="text" />

          <label>Last Name</label>
          <input type="text" />

          <label>Email</label>
          <input type="text" />

          <label>Message</label>
          <input type="text" />

          <button className="send" type="submit">
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
