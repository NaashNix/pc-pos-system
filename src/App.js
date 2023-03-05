import './App.css';
import CartItem from './components/Cart/CartItem';
import FoodTileContainer from './components/FoodTypeTile/FoodTileContainer';
import ItemTileContainer from './components/ItemTiles/ItemTileContainer';
import SingleItem from './components/ItemTiles/SingleItem';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrdersContainer from './components/RecentOrders/RecentOrdersContainer';

function App() {
  return (
    <div className="App">
      {/* <UpperNavBar />
      <div className="center" >
        <RecentOrdersContainer />
       <div className="innerCenter" >
          <FoodTileContainer />
          <ItemTileContainer /> 
       </div>
      </div> */}
      <CartItem />
    </div>
  );
}

export default App;
