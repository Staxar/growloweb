import React from "react";
export const Header = () => {
  return (
    <section className="header">
      <div className="header__container flex flex__column">
        <header className="flex header__top">
          <div>
            <h1 className="header__logo">Growlo</h1>
          </div>
          <div className="flex h2">
            <span>Home</span>
            <span>Featured</span>
            <span>How it work</span>
            <span>Categories</span>
          </div>
        </header>
        <div className="flex header__content">
          <div className="">
            <h1>Stop wasting food and start making money</h1>
            <h3>Help the world change</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
