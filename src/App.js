import './App.css';
import { useDispatch } from 'react-redux';
import { buyCake, sellCake } from './redux/cake/cake.actions';
import { useSelector } from 'react-redux';
import { cakeSelector } from './redux/cake/cake.selector';

function App() {

  const dispatch = useDispatch();

  function handleClickBuyCake(){
    dispatch(buyCake(1))
  }

  function handleClickSellCake(){
    dispatch(sellCake(1))
  }

  const cake = useSelector(cakeSelector)

  console.log(cake)
  return (
    <div className="App">
      <h3>Hello World</h3>
      <h4>{cake}</h4>
      <button onClick={handleClickBuyCake}>Buy Cake</button>
      <button onClick={handleClickSellCake}>Sell Cake</button>

    </div>
  );
}

export default App;
