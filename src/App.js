import * as emoji from 'node-emoji';
import { useState } from 'react';

export default function App() {
  const initialEmoji = emoji.random();
  const [emojiIcon, setEmojiIcon] = useState(initialEmoji.emoji);
  // 1. create the state for the input
  const [emojiName, setEmojiName] = useState(initialEmoji.name);
  // This return true if the current value of emojiName is invalid
  const hasError = !emoji.has(emojiName);

  return (
    <>
      <h1>Random Emoji Generator</h1>
      <div
        style={{
          fontSize: '100px',
        }}
      >
        {emojiIcon}
      </div>
      <div style={{ color: 'white', backgroundColor: 'red' }}>
        {hasError ? "This emoji don't exist" : ''}
      </div>
      <br />
      {/* 2. set the value of the input*/}
      {/* 3. use the update function inside of the onChange event */}
      <input
        value={emojiName}
        onChange={(event) => {
          setEmojiName(event.currentTarget.value);
          // 1. it matches update the emoji with the new value
          if (emoji.has(event.currentTarget.value)) {
            const foundEmojiIcon = emoji.get(event.currentTarget.value);
            setEmojiIcon(foundEmojiIcon);
          } else {
            // 2. the name doesn't matches show error
            setEmojiIcon('');
          }
        }}
      />
      <br />
      <button
        onClick={() => {
          const newEmoji = emoji.random();
          setEmojiIcon(newEmoji.emoji);
        }}
      >
        Generate Random
      </button>
    </>
  );
}
