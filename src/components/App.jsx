import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from 'redux/counter/counterSlice';

export const App = () => {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      Value: {value}
      <button type="button" onClick={() => dispatch(increment(1))}>
        Increment +1
      </button>
      <button type="button" onClick={() => dispatch(decrement(1))}>
        Decrement -1
      </button>
    </div>
  );
};
