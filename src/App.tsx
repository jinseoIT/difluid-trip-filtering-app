import './App.css';
import Header from './components/Header';
import ProfileCardList from './components/ProfileCardList';
import FullBleed from './components/FullBleed';
import TripSection from './components/trip/TripSection';

function App() {
  return (
    <main>
      <Header />
      <ProfileCardList />
      <FullBleed />
      <TripSection />
    </main>
  );
}

export default App;
