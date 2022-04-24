import './App.css';
import RatingCard from './components/RatingCard';
import ThankYouCard from './components/ThankYouCard';
import Attribution from './components/Attribution';
import { useGlobalContext } from './context';

function App() {
  const { isSubmited } = useGlobalContext();
  return (
    <div className="App">
      {isSubmited ? <ThankYouCard /> : <RatingCard />}
      <Attribution />
    </div>
  );
}

export default App;
