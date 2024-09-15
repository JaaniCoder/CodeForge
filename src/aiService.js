import axios from "axios";

const API_KEY = process.env.OPENAI_API;
const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

export const generateCode = async (prompt) => {
    try {
        const response = await axios.post(
            API_URL, {
                prompt: prompt,
                max_tokens: 100,
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error generating code:', error);
        return 'Sorry, I encountered an error while generating the code.';
    }
};