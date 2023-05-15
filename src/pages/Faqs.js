import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../App.css";

const faqQuestions = [
  {
    title: "How do I place an order?",
    content: "...",
  },
  {
    title: "I placed my order; now what?",
    content:
      "Thank you for your order! You will receive a confirmation email with the details of your order. Now the hard part begins; you will have to wait until pickup day. The location for the pickup varies, but it will be specified on the order form. The open hours will also vary but usually between 11:00 am and 3:00 pm. On the day of the Pop-Up event, drop by the location during the open hours of the Pop-Up, pick up your goodies, and enjoy!",
  },
  {
    title: "Do you do deliveries?",
    content:
      "Unfortunately, not at this moment, but it could be a possibility once the micro-business grows.",
  },
  {
    title: "Do you ship outside of Washington?",
    content:
      "Sadly, due to the type of food license, I am not allowed to make sales outside of Washington.",
  },
  {
    title: "I placed an order but didn’t get the confirmation email",
    content:
      "Please allow ___ hours for your confirmation to arrive and check the spam/junk folder in your inbox. If you can’t locate it after ____ hours, please fill out the contact form or email aslyndiaz@gmail.com.",
  },
  {
    title: "Can I walk in during the Pop-up?",
    content:
      "Of course! But preordering is highly recommended to guarantee you’ll be able to get your first choice of goodies. The items available to buy on the spot will be in limited quantities, and not all the items will be available to purchase on the day of the pop-up.",
  },
  {
    title: "Do you take special orders?",
    content:
      "Yes! Please fill out the contact form or email aslyndiaz@gmail.com with the details.",
  },
  {
    title: "Can I cancel my order?",
    content:
      "Cancellations will be accepted up to a week before the Pop-up event. If you need to cancel your order six to four days ahead, please fill out the contact form or email aslyndiaz@gmail.com. Those will be handled on a case-by-case basis. Changes will not be accepted within three days of the event.",
  },
];

function Accordion({ faqQuestions }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <div className="accordionItem">
      {faqQuestions.map((item, index) => (
        <div className="accordionHeader" key={item.title}>
          <h4
            onClick={() => handleClick(index)}
            style={{ display: "flex" }}
          >
            {item.title}
            <i>
              <ArrowDropDownIcon className="accordionIcon" />
            </i>
          </h4>
          {/* <h4 onClick={() =>handleClick(index)}><AddIcon />{item.title}</h4> */}
          {index === activeIndex && (
            <h4 style={{marginLeft: '30px'}}>{item.content}</h4>
          )}
        </div>
      ))}
    </div>
  );
}

function Faqs() {
  return (
    <div className="Faqs">
      <div className="faqsContainer">
        <h3 className="title">FAQ</h3>
        <Accordion faqQuestions={faqQuestions} />
        <p>
          For any other questions, please{" "}
          <Link to="/contact" className="faqLink">
            Contact Us
          </Link>
         
        </p>
      </div>
    </div>
  );
}

export default Faqs;
