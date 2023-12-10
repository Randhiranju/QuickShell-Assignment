import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Dash from './components/DashBoard/Dash';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Details/UserDetails';
import Loader from './components/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "12px"}} >
      <TopNav/>
      <hr style={{marginTop : "12px"}} />
      <Dash/>
    </div>
  ) : <Loader/>
}

export default App