import React, { useReducer } from "react";
import "./Style.css";
import Header from "../../Header";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }

  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  // const initialData = 15;
  //   const [myNum, setMyNum] = React.useState(0);
  const intialData = 0;
  const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <div>
     

      <section>
      <h2 style={{color:'white'}}>useReducer Hook</h2>
        <div className="center_div">
          <p className="pname">{state}</p>
          <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
          </div>
          <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseReducer;
