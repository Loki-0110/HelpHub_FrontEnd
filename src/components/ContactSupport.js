import React, { useState } from "react";
import DonorNavbar from "./DonorNavbar";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHeadset,
  faQuestionCircle,
  faCommentDots,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const ContactSupport = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setTimeout(() => {
      setMessages([...newMessages, { sender: "bot", text: "Let me check that for you." }]);
    }, 1000);
  };

  return (
    <Container>
      <DonorNavbar />
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="contact-container">
        <div className="contact-card shadow-lg p-4">
          <h2 className="heading">Contact Support</h2>
          <p className="text-muted">Need help? Our team is available 24/7!</p>

          <h5 className="section-title">Contact Options</h5>
          <hr />
          <div className="d-flex flex-column gap-3">
            <ContactItem icon={faEnvelope} title="Email Support" info="support@helphub.com" color="text-primary" />
            <ContactItem icon={faPhone} title="Phone Support" info="+91 98765 43210" color="text-success" />
            <ContactItem icon={faHeadset} title="Live Chat" info="Talk to our agent instantly" color="text-danger" />
          </div>

          <h5 className="section-title">FAQs</h5>
          <FAQItem question="How can I reset my password?" answer="Go to settings and click on 'Forgot Password'." />
          <FAQItem question="How can I track my donations?" answer="Check the 'Donation History' section in your profile." />

          <motion.button whileHover={{ scale: 1.1 }} className="btn btn-primary mt-3" onClick={() => setChatOpen(true)}>
            <FontAwesomeIcon icon={faCommentDots} className="me-2" /> Chat with Support
          </motion.button>
        </div>
      </motion.div>

      {chatOpen && <Chatbot setChatOpen={setChatOpen} messages={messages} input={input} setInput={setInput} handleSendMessage={handleSendMessage} />}
    </Container>
  );
};

const ContactItem = ({ icon, title, info, color }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="contact-item">
    <FontAwesomeIcon icon={icon} className={`me-3 ${color}`} size="2x" />
    <div>
      <h6>{title}</h6>
      <p className="mb-0">{info}</p>
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="faq-item">
    <FontAwesomeIcon icon={faQuestionCircle} className="me-2 text-warning" />
    <strong>{question}</strong>
    <p className="mb-0">{answer}</p>
  </motion.div>
);

const Chatbot = ({ setChatOpen, messages, input, setInput, handleSendMessage }) => (
    <>
      <motion.div 
        className="chatbot-overlay" 
        onClick={() => setChatOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="chatbot-container"
      >
        <div className="chatbot-header">
          <h6 className="mb-0">AI Chat Support</h6>
          <FontAwesomeIcon icon={faTimes} className="text-danger cursor-pointer" onClick={() => setChatOpen(false)} />
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <motion.div 
              key={index} 
              className={`chat-msg ${msg.sender}`} 
              initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
        <div className="chatbot-input">
          <input type="text" placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} />
          <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
        </div>
      </motion.div>
    </>
  );
  

const Container = styled.div`
  .contact-container {
    margin: auto;
    padding: 40px;
    width: 100%;
    max-width: 800px;
  }
  .contact-card {
    border-radius: 15px;
    padding: 20px;
  }
  .heading {
    font-weight: bold;
  }
  .section-title {
    color: #007bff;
    font-weight: bold;
  }
  .contact-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    background: white;
  }
  .faq-item {
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f8f9fa;
  }
  
  .chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transform-origin: bottom right;
  }
  .chatbot-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #007bff;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
   .chatbot-messages {
    max-height: 250px;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .chat-msg {
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    max-width: 80%;
  }

  .chat-msg.bot {
    background: #f1f1f1;
    align-self: flex-start;
  }

  .chat-msg.user {
    background: #007bff;
    color: white;
    align-self: flex-end;
  }

  .chatbot-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
  }

  .chatbot-input input {
    flex: 1;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export default ContactSupport;
