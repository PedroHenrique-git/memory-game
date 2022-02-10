import 'toastify-js/src/toastify.css';
import Game from './components/Game/Game';

const App = () => {
  return (
    <>
      <Game minGame={14} maxGame={64} timeToShowImage={1000} />;
    </>
  );
};

export default App;
