import { useEffect, useState } from 'preact/hooks';
import { v4 as uuid } from 'uuid';
import generateRandomEmoji from '../../utils/generateRandomEmoji';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import shuffleArray from '../../utils/shuffleArray';
import Won from '../Won/Won';
import './Game.css';

type Card = {
  id: string;
  emoji: string;
};

type GameProps = {
  minGame: number;
  maxGame: number;
  timeToShowImage: number;
};

const Game = ({ minGame, maxGame, timeToShowImage }: GameProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [difficult, setDifficult] = useState(
    generateRandomNumber(minGame, maxGame),
  );
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [showImages, setShowImages] = useState<boolean[]>([]);
  const [won, setWon] = useState(false);

  const handleClickCard = (index: number, card: Card) => {
    const newShowImages = showImages.map((v, i) => (i === index ? !v : v));
    setSelectedCards((prevState) => [...prevState, card]);
    setShowImages(newShowImages);
  };

  useEffect(() => {
    const generateMemoryCards = () => {
      setCards([]);

      for (let i = 0; i < difficult; i += 1) {
        const card = { id: uuid(), emoji: generateRandomEmoji() };
        setCards((prevState) => [...prevState, card]);
      }

      setCards((prevState) => Array.from(new Set([...prevState])));
      setCards((prevState) => shuffleArray<Card>([...prevState, ...prevState]));
      setShowImages(new Array(cards.length).fill(false));
    };

    generateMemoryCards();
  }, [difficult, cards.length]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const areNotSame = selectedCards[0].id !== selectedCards[1].id;

      if (areNotSame) {
        const oldStateImages = cards.map((c, i) => {
          if (c.id === selectedCards[0].id || c.id === selectedCards[1].id)
            return false;
          return showImages[i];
        });

        setTimeout(() => {
          setShowImages(oldStateImages);
          setSelectedCards([]);
        }, timeToShowImage);
      } else {
        setSelectedCards([]);
      }
    }

    setWon(() => showImages.every((v) => v === true));
  }, [selectedCards, showImages, cards, timeToShowImage]);

  if (won) {
    return (
      <Won
        onClick={() => setDifficult(generateRandomNumber(minGame, maxGame))}
      />
    );
  }

  return (
    <section className="game-container">
      <ul className="cards-container">
        {cards.map((card, index) => (
          <li
            className={`hide card ${showImages[index] ? 'found-pair' : ''} ${
              selectedCards.length === 2 ? 'block-click' : ''
            }`}
            key={uuid()}
            onClick={(e) =>
              showImages[index]
                ? e.preventDefault()
                : handleClickCard(index, card)
            }
          >
            {showImages[index] ? card.emoji : ''}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setDifficult(generateRandomNumber(minGame, maxGame))}
        className="start-game-button"
      >
        Generate a random game
      </button>
    </section>
  );
};

export default Game;
