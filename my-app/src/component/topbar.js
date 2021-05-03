
import imgg from "../img/nouser.png";
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {logout } from '../actions/index'


function Topbar () {
    const state = useSelector(state => state.dataReducer)
    const { login } = state
    const dispatch = useDispatch()

    return (
      <div className="topbar">
        <div className="logo"></div>
        <div className='topuserwrap'>
          <div className="topuser">
            {
              login ? <p className="topUserName" onClick={()=> dispatch(logout())  }> Log Out </p> : 
              <Link to='/login' style={{ color: 'inherit', textDecoration: 'none' }}> <p className="topUserName"> Log In </p> </Link>
            }
            {
              login ? <Link to='/mypage'> <img className="loginimage" src={imgg} /> </Link> : <Link to='/signup'  style={{ color: 'inherit', textDecoration: 'none' }}>   <p className="topUserName" > signup</p> </Link>
            }
          
          </div>
          <div className='topspace'></div>
        </div>
      </div>
    );
  }


export default Topbar;