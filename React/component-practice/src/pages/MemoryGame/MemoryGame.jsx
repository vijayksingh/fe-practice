import React, { useEffect } from "react";
import "./styles.css";

const emojis = [
  "🐵",
  "🐶",
  "🦊",
  "🐱",
  "🦁",
  "🐯",
  "🐴",
  "🦄",
  "🦓",
  "🦌",
  "🐮",
  "🐷",
  "🐭",
  "🐹",
  "🐻",
  "🐨",
  "🐼",
  "🐽",
  "🐸",
  "🐰",
  "🐙",
];

function generateEmojiObjects(emojis) {
  const randomEmojis = emojis.sort(() => Math.random() - 0.5).slice(0, 8);
  let emojiObjects = randomEmojis.map((emoji, index) => ({
    emoji,
    flipped: false,
    key: `${emoji}-${index}`,
  }));

  emojiObjects = [...emojiObjects, ...emojiObjects];
  emojiObjects.sort(() => Math.random() - 0.5);
  return emojiObjects.map((item, index) => ({ ...item, index }));
}

function Cell({ emoji, flipped, onClick, index }) {
  const blankCell = (
    <div className="cellBlank" onClick={() => onClick(index)}></div>
  );
  const emojiCell = <div className="emojiCell">{emoji}</div>;
  return flipped ? emojiCell : blankCell;
}

function MemoryGame() {
  const [emojisArray, setEmojiArray] = React.useState(
    generateEmojiObjects(emojis)
  );

  const [currentEmojis, setCurrentEmojis] = React.useState([]);

  useEffect(() => {
    if (currentEmojis.length < 2) {
      return;
    }

    let timer;

    const [first, second] = currentEmojis;

    if (first.key !== second.key) {
      const newEmojisArray = [...emojisArray];

      timer = setTimeout(() => {
        newEmojisArray[first.index] = { ...first, flipped: false };
        newEmojisArray[second.index] = { ...second, flipped: false };
        setEmojiArray(newEmojisArray);
        setCurrentEmojis([]);
      }, 1000);
    } else {
      setCurrentEmojis([]);
    }

    () => clearTimeout(timer);
  }, [currentEmojis, emojisArray]);

  function onCardClick(index) {
    if (currentEmojis.length === 2) return;

    const emojiObject = emojisArray[index];
    setCurrentEmojis((currentEmojis) => [...currentEmojis, emojiObject]);

    const newEmojiObject = { ...emojiObject, flipped: true };
    const newEmojisArray = [...emojisArray];
    newEmojisArray[index] = newEmojiObject;
    setEmojiArray(newEmojisArray);
  }

  return (
    <div className="boardContainer">
      {emojisArray.map((item, index) => (
        <Cell
          key={`${index}-${item.key}`}
          emoji={item.emoji}
          flipped={item.flipped}
          onClick={onCardClick}
          index={index}
        />
      ))}
    </div>
  );
}

export default MemoryGame;
