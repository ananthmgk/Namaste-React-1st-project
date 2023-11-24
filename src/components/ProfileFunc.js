import { useEffect, useState } from "react";

const ProfileFunc = (props) => {
  const [count1, setcount1] = useState(0);
  const [count2] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 100);
    console.log("useEffect");
    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);
  return (
    <div>
      <h1>This is Functional base Profile Component</h1>
      <h1>Name: {props.name}</h1>
      <h2>CountFunc: {count1}</h2>
      {/* <h2>CountFunc: {count2}</h2> */}
      <button
        onClick={() => {
          setcount1(1);
        }}
      >
        Count
      </button>
    </div>
  );
};
export default ProfileFunc;
