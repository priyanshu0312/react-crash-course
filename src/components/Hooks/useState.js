import React, { useState } from "react";
import "./Style.css";
import Header from "../../Header";

function UseState() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        {/* <Header /> */}
        <section>
          <h2 style={{color:'white'}}>useState Hook</h2>
          <div className="center_div">
            <p className="pname">{count}</p>
            <div className="button2" onClick={() => setCount(count + 1)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Incr
            </div>
            <div
              className="button2"
              onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Decr
            </div>
          </div>
        </section>{" "}
      </div>
    </>
  );
}

export default UseState;
