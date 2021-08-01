import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div id="fixed-social">
        <div>
          <Link to="/restaurant" class="fixed-facebook">
           <span>Facebook</span>
          </Link>
        </div>
        <div>
          <Link to="/useState" class="fixed-twitter">
           <span>UseState</span>
          </Link>
        </div>
        <div>
          <Link to="/useEffect" class="fixed-gplus">
           <span>UseEffect+</span>
          </Link>
        </div>
        <div>
          <Link to="/useReducer" class="fixed-linkedin">
           <span>UseReducer</span>
          </Link>
        </div>
        <div>
          <Link to="#" class="fixed-instagrem">
            <i class="fa fa-instagram"></i> <span>Instagram</span>
          </Link>
        </div>
        <div>
          <Link to="/" class="fixed-tumblr">
            <i class="fa fa-tumblr"></i> <span>home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
