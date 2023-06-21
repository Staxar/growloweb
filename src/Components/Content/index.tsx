import React from "react";
import moneyplant from "../../assets/images/moneyplant.jpg";
export const Content = () => {
  return (
    <section className="section content__section">
      <div className="flex content__container">
        <img src={moneyplant} alt="moneyplant" />
        <div className=""></div>
      </div>
    </section>
  );
};
