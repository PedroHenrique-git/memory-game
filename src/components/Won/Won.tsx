import { useEffect, useState } from 'preact/hooks';
import './Won.css';

type WonProps = {
  onClick(): void;
};

const Won = ({ onClick }: WonProps) => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowComponent(true), 1000);
  }, [showComponent]);

  return (
    <div className="won-container">
      {showComponent ? (
        <>
          <h1>✌ Congratulations! you won</h1>
          <button type="button" onClick={onClick} className="start-game-button">
            Play again ?
          </button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Won;
