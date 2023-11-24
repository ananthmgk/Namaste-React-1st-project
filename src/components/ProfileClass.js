import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("children-constructor");
    this.state = {
      userInfo: "",
      id: "",
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ananthmgk");
    const json = await data.json();
    console.log(json.login);
    this.setState({
      userInfo: json.login,
      id: json.id,
    });
    // console.log("children-componentDidMount");
  }
  render() {
    // console.log("children-render");
    return (
      <div>
        <h1>This is a class base Profile Component</h1>
        <h1>Name: {this.state?.userInfo}</h1>
        <h2>ID: {this.state?.id}</h2>
      </div>
    );
  }
}
export default ProfileClass;
