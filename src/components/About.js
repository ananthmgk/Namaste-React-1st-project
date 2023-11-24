import { Outlet } from "react-router-dom";
// import ProfileClass from "./ProfileClass";
import React from "react";
import ProfileFunc from "./ProfileFunc";

const About = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <p>This is namaste React Course</p>
      {/* <Outlet /> */}
      <ProfileFunc />
    </div>
  );
};

// class About1 extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log("Parent-constructor");
//   }
//   componentDidMount() {
//     // console.log("Parent-componentDidMount");
//   }
//   render() {
//     // console.log("Parent-render");
//     return (
//       <div>
//         <h1>About us Page</h1>
//         <p>This is namaste React Course</p>
//         <Outlet />
//         <ProfileClass />
//         {/* <ProfileClass name={"SecondChild"} /> */}
//       </div>
//     );
//   }
// }

export default About;

/**
 * Parent-constructor
 * Parent-render
 *    FirstChild-constructor
 *    FirstChild-render
 *    SecondChild-constructor
 *    SecondChild-render
 *    FirstChild-componentDidMount
 *    SecondChild-componentDidMount
 * Parent-componentDidMount
 */
