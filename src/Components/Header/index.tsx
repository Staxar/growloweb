import React from "react";
export const Header = () => {
  return (
    <section className="header">
      <div className="header__container flex flex__column">
        <header className="flex">
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
        <div className="flex">
          <h1>
            Start to use Growlo with reliable farmers with reliable farmers
          </h1>
        </div>
      </div>
    </section>
  );
};
