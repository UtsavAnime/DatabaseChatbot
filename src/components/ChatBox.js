import React, { Component } from 'react';
import Message from './Message';
import axios from 'axios';

class ChatBox extends Component {
    state = {
        messages: [],
        inputText: '',
    };

    fetchData = async (text) => {
        try {
            const response = await axios.post('https://chatbotbackend-n5ag.onrender.com/api/data', {
                message: text
            });
            console.log(response, "response");
            const message = response.data;
            this.setState((prevState) => ({
                messages: [...prevState.messages, message],
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    handleInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((prevState) => ({
            messages: [...prevState.messages, prevState.inputText],
            inputText: '',
        }));
        this.fetchData(this.state.inputText);
    };
    render() {
        return (
            <div className='chatbox'>
                <div className='message-container'>
                    {this.state.messages.map((message, index) => (
                        <Message key={index} text={message} />
                    ))}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.inputText}
                        onChange={this.handleInputChange}
                        placeholder='Type your message...' />
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default ChatBox