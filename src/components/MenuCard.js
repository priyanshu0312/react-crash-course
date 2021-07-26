import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);
  return (
    <div>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle">
                      {curElem.category}
                    </span>
                    <h6 className="card-title">{curElem.name}</h6>
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curElem.image} alt="" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default MenuCard;
