import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Game from './components/Game/Game';

const App = () => {
  return (
    <>
      <Game minGame={14} maxGame={64} timeToShowImage={1000} />;
      <ToastContainer />
    </>
  );
};

export default App;
