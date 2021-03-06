import imgg from "../img/nouser.png";
import { Link } from "react-router-dom";
import { Component } from "react";
import logoimage from "../img/logo.png";

class Topbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="topbar">
        <div className="logo">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img className="logo_image" alt="" src={logoimage} />
          </Link>
        </div>
        <div className="topuserwrap">
          <div className="topuser">
            {this.props.value ? (
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <p className="topUserName" onClick={this.props.logoutHandler}>
                  {" "}
                  Log Out{" "}
                </p>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {" "}
                <p className="topUserName"> Log In </p>{" "}
              </Link>
            )}
            {this.props.value ? (
              <Link to="/mypage">
                {" "}
                <img className="loginimage" src={imgg} alt="" />{" "}
              </Link>
            ) : (
              <Link
                to="/signup"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {" "}
                <p className="topUserName"> signup</p>{" "}
              </Link>
            )}
          </div>
          <div className="topspace"></div>
        </div>
      </div>
    );
  }
}

export default Topbar;
