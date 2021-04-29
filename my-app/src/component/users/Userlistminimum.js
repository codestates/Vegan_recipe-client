import { Component } from "react";
import imgg from '../../img/user.png'

class UserMinimun extends Component {

  render() {

    const tempdata = [
      { name: 'kimlucky', article: 130 },
      { name: 'kimlucky', article: 130 },
      { name: 'kimlucky', article: 130 },
      { name: 'kimlucky', article: 130 },
    ]
    return(
      <div className='userlist_main'>
        {tempdata.map(data => (
          <div className='userlist'>
            <img className='userlist_img' src={imgg} alt='' />
            <div className='userlist_info'>
              <p>{data.name}</p>
              <p>{data.article}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default UserMinimun;