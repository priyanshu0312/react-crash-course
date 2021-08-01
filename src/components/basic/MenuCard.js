import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <div>
      <div className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, description, category, image } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle">{category}</span>
                    <h6 className="card-title">{name}</h6>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCard;
