import React, { useState } from 'react';
import styled from 'styled-components';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi there! How can I help you today?' },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: userInput },
    ]);
    setUserInput('');

    // Implement your logic to send the user message to your chatbot API
    // and handle the response here
  };

  return (
    <ChatbotContainer>
      <ChatHeader>
        <h2>Chatbot</h2>
        <CloseButton className="material-symbols-outlined">close</CloseButton>
      </ChatHeader>
      <Chatbox>
        {messages.map((message, index) => (
          <ChatMessage key={index} className={message.role}>
            {message.role === 'bot' && (
              <span className="material-symbols-outlined">smart_toy</span>
            )}
            <p>{message.content}</p>
          </ChatMessage>
        ))}
      </Chatbox>
      <ChatInput>
        <textarea
          placeholder="Enter a message..."
          spellCheck="false"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
        ></textarea>
        <SendButton className="material-symbols-rounded" onClick={handleSendMessage}>
          send
        </SendButton>
      </ChatInput>
    </ChatbotContainer>
  );
};

// Styled Components
const ChatbotContainer = styled.div`
  position: fixed;
  right: 35px;
  bottom: 90px;
  width: 420px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
  transform-origin: bottom right;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1), 0 32px 64px -48px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease;

  @media (max-width: 490px) {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
  }
`;

const ChatHeader = styled.header`
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  background: #724ae8;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.4rem;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  display: none;
  cursor: pointer;
  transform: translateY(-50%);
`;

const Chatbox = styled.ul`
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px 100px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 25px;
  }
`;

const ChatMessage = styled.li`
  display: flex;
  list-style: none;
  margin: ${(props) => (props.className === 'outgoing' ? '20px 0' : 'none')};
  justify-content: ${(props) =>
    props.className === 'outgoing' ? 'flex-end' : 'flex-start'};

  span {
    width: 32px;
    height: 32px;
    color: #fff;
    cursor: default;
    text-align: center;
    line-height: 32px;
    align-self: flex-end;
    background: #724ae8;
    border-radius: 4px;
    margin: 0 10px 7px 0;
  }

  p {
    white-space: pre-wrap;
    padding: 12px 16px;
    border-radius: 10px 10px 0 10px;
    max-width: 75%;
    color: #fff;
    font-size: 0.95rem;
    background: ${(props) => (props.className === 'outgoing' ? '#724ae8' : '#f2f2f2')};
  }
`;

const ChatInput = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px;
  border-top: 1px solid #ddd;
`;

const ChatTextarea = styled.textarea`
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px 15px 15px 0;
  font-size: 0.95rem;

  &:valid ~ span {
    visibility: visible;
  }
`;

const SendButton = styled.span`
  align-self: flex-end;
  color: #724ae8;
  cursor: pointer;
  height: 55px;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 1.35rem;

  &:valid ~ span {
    visibility: visible;
  }
`;

export default Chatbot;
