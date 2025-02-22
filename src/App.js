import { json, response } from 'express';
import { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const createNewChat = () => {
    setMessage(null);
    setValue('');
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue('');
  };

  const options = {
    method: 'POST',
    body: JSON.stringify({
      message: value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const getMessages = async () => {
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        options
      );
      const data = await response.json();
      setMessage(data.choices[0].message);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(message);

  useEffect(() => {
    console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value & message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: 'user',
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);

  console.log(previousChats);

  const currentChat = previousChats.filter(
    (previousChat) => previousChat.title === currentTitle
  );

  const uniqueTitles = Array.from(
    new Set(
      previousChats.map((previousChat) => (previousChat) => previousChat.title)
    )
  );

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={createNewChat}>+ New chat</button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitle, index) => (
            <li key={index} onClick={() => handleClick(uniqueTitle)}>
              {uniqueTitle}
            </li>
          ))}
        </ul>
        <nav>
          <p>Made by Eren</p>
        </nav>
      </section>
      <section className="main">
        {!currentTitle && <h1>MiroChat</h1>}
        <ul className="feed">
          {currentChat?.map((chatMessage, index) => (
            <li key={index}>
              <p className="role">{chatMessage.role}</p>
              <p>{chatMessage.content}</p>
            </li>
          ))}
        </ul>

        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChan ge={(e) => setValue(e.target.value)} />

            <div id="submit" onClick={getMessages}></div>
          </div>
          <p className="info">
            MiroChat can make mistakes. Consider checking important information.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
