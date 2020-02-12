import React, { useState, useCallback } from 'react';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const handleInput = useCallback((event) => {
    setText(event.target.value);
  }, []);
  const handleSubmit = useCallback(() => {
    chrome.storage.sync.set({
      textText: text,
    }, () => {
      setText('successfully setted');
    });
  }, [text]);

  return (
    <div>
      <input
        value={text}
        onChange={handleInput}
      />
      <button
        onClick={handleSubmit}
        type="button"
      >
        submit
      </button>
    </div>
  );
};

export default App;
