import { Component } from "react";
import imgg from "../../img/itemimg.png";
import { Link } from "react-router-dom";

class Latest extends Component {
  constructor(props) {
    super(props);

    this.printLatestMain = this.printLatestMain.bind(this);
  }

  printLatestMain() {}
  render() {
    const tempdata = [
      {
        img: "../../img/itemimg.png",
        tag: "FRUIT",
        time: "5minss",
        name: "APPLE JUICE",
      },
      {
        img: "../../img/itemimg.png",
        tag: "FRUIT",
        time: "5minwqqw",
        name: "APPLEqweqwe JUICE",
      },
      {
        img: "../../img/itemimg.png",
        tag: "FRUIT",
        time: "5min",
        name: "APP123123LE JUICE",
      },
    ];
    return (
      <div className="latest_main">
        <div className="Latelytitle">Lately</div>
        <div className="Latelycontent">
          {tempdata.map((data, idx) => (
            <div key={idx}>
              <Link
                to="/recipecomment"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div className="Latelyitem">
                  <img className="mainLatelyimg" src={imgg} alt="" />
                  <div className="Latelyfont1">
                    <span className="latelyTag">{data.tag}</span>
                    <div className="latelyspace" />
                    <div className="latelyLine" />
                    <div className="latelyspace" />
                    <span className="latelyTime">{data.time}</span>
                  </div>
                  {/* <div className="Latelyfont2">{data.time}</div> */}
                  <div className="latelyName">{data.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Latest;
