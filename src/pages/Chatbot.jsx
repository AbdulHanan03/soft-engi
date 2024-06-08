import React, { useState } from 'react';
import './Chatbot.css';


const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async (event) => {
        if (event.key === 'Enter') {
            const userMessage = { sender: 'User', text: input };
            setMessages([...messages, userMessage]);

            const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: input })
            });

            const data = await response.json();
            const botMessages = data.map(reply => ({ sender: 'Bot', text: reply.text }));
            setMessages([...messages, userMessage, ...botMessages]);
            setInput('');
        }
    };

    return (
        <div id="chat-container">
            <div id="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender.toLowerCase()}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                id="user-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={sendMessage}
                placeholder="Type a message..."
            />
        </div>
    );
};

export default Chatbot;
