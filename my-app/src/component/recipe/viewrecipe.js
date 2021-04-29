import { Component } from "react";
import imgg from '../../img/itemimg.png';
import imggg from '../../img/user.png';
class ViewRecipe extends Component {

  render() {
    const tempdata = [{
      tag: 'FRUIT',
      time: '5 days ago',
      name: 'Simple Juice Recipes to boost your immune system',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      username: 'kimlucky',
    }]

    return(
      <div className='main_recipe'>
        {tempdata.map(data => (
          <div>
          <img className='main_recipe_img' src={imgg} alt='' />
          <div>{data.tag}</div>
          <div>{data.name}</div>
          <p></p>
          <div className='main_recipe_userinfo'>
            <img src={imggg} alt='' />
            <p>{data.username}</p>
            <p>{data.time}</p>
          </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ViewRecipe;