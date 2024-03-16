import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';

function App(){
  const count = useSelector(state => state.count);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  };

  return <Counter count={count} increment={increment} decrement={decrement} />;
}

export default App;