import './App.css';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrdersContainer from './components/RecentOrders/RecentOrdersContainer';

function App() {
  return (
    <div className="App">
      <UpperNavBar />
      <FoodTileContainer />   
      <RecentOrdersContainer />
    </div>
  );
}

export default App;
