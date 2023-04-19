import React from 'react';
import './App.css';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Chatbox</h1>
        <h2>Ask about cars & movies!!!</h2>
      </header>
      <main>
        <ChatBox />
      </main>
    </div>
  );
}

export default App;
