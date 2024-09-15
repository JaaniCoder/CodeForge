import React, { useState } from 'react';
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { generateCode } from '../aiService';

const AICopilot = () => {
    const [isFirstMessage, setIsFirstMessage] = useState(true);

    const handleNewUserMessage = async (message) => {
        if(isFirstMessage) {
            addResponseMessage("Hello! I'm your AI coding assistant. Ask me to generate code for you.");
            setIsFirstMessage(false);
        } else {
            const response = await generateCode(message);
            addResponseMessage(response);
        }
    };

    return (
        <div>
            <Widget handleNewUserMessage={handleNewUserMessage} title="AICopilot" subtitle="Ask me to generate" />
        </div>
  )
}

export default AICopilot;