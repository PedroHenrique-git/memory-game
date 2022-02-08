import { useEffect, useState } from 'preact/hooks';
import { v4 as uuid } from 'uuid';
import generateRandomEmoji from '../../utils/generateRandomEmoji';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import shuffleArray from '../../utils/shuffleArray';
import './Game.css';

type Card = {
  id: string;
  emoji: string;
};

const Game = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [difficult, setDifficult] = useState(generateRandomNumber(24, 64));
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [showImages, setShowImages] = useState<boolean[]>([]);

  const handleClickCard = (index: number, card: Card) => {
    const newImages = showImages.map((v, i) => {
      if (index === i) return true;
      return v;
    });

    setSelectedCards((prevState) => [...prevState, card]);
    setShowImages(newImages);
  };

  useEffect(() => {
    const generateMemoryCards = () => {
      setCards([]);

      for (let i = 0; i < difficult; i += 1) {
        const card = { id: uuid(), emoji: generateRandomEmoji() };
        setCards((prevState) => Array.from(new Set([...prevState, card])));
      }

      setCards((prevState) => shuffleArray<Card>([...prevState, ...prevState]));
      setShowImages(new Array(cards.length).fill(false));
    };

    generateMemoryCards();
  }, [difficult, cards.length]);

  useEffect(() => {
    const copyShowImages = [...showImages];

    if (selectedCards.length === 2) {
      const areSame = selectedCards[0].id === selectedCards[1].id;

      if (areSame) {
        //setShowImages(newImages);
        return;
      } else {
        setShowImages(copyShowImages);
        setSelectedCards([]);
        alert('igual a 2');
        return;
      }
    }
  }, [selectedCards]);

  return (
    <section className="game-container">
      <ul className="cards-container">
        {cards.map((card, index) => (
          <li
            className="hide card"
            key={uuid()}
            onClick={() => handleClickCard(index, card)}
          >
            {showImages[index] ? card.emoji : ''}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setDifficult(generateRandomNumber(24, 64))}
        className="start-game-button"
      >
        Generate a random game
      </button>
    </section>
  );
};

export default Game;
