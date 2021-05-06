import book from '../img/recipe-book.png';
import harvest from '../img/harvest.png';
import chef from '../img/male-chef.png';
import { Link } from 'react-router-dom';



function sidebar () {

    return (
      <div className="sidebar">
        <div className='sideupspace'/>
        <Link to='/recipe'> <img className="sideImage" src={book}/> </Link>
        <div className="sideEmptySpace"/>
        <Link to='/material'> <img className="sideImage" src={harvest}/> </Link>
        <div className="sideEmptySpace"/>
        <Link to='/user'> <img className="sideImage" src={chef}/> </Link>
      </div>
    );
  }


export default sidebar;
