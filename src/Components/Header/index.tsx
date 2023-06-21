import React from "react";
import { Typography } from "../Typography";
export const Header = () => {
  const headerValues: Array<string> = [
    "Home",
    "Feature",
    "How it works",
    "Categories",
  ];
  return (
    <section className="mb-12 h-screen rounded-xl bg-cover bg-[url('https://img.freepik.com/free-vector/smart-ecological-farming-cartoon-illustration_33099-2028.jpg?w=1380&t=st=1687332017~exp=1687332617~hmac=65febd61473c6832ee7ea819bd99891cf5d5b865005c2185e3b404008c36b8b2')]">
      <div className="p-8 flex flex-col gap-12">
        <header className="flex justify-between items-center">
          <div>
            <Typography variant="h1" color="text-primary">
              Growlo
            </Typography>
          </div>
          <div className="flex gap-8 mx-auto">
            {headerValues.map((item, index) => (
              <Typography variant="h2" color="text-primary" key={index}>
                {item}
              </Typography>
            ))}
          </div>
        </header>
        <div className="flex flex-col">
          <div className="flex flex-col text-right mx-14 gap-8">
            <Typography variant="h3" color="text-primary">
              Stop wasting food and start making money
            </Typography>
            <Typography variant="h2" color="text-primary">
              Stop wasting food and start making money
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};
