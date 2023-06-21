import React from "react";
import moneyplant from "../../assets/images/moneyplant.jpg";
import { Typography } from "../Typography";
export const Content = () => {
  return (
    <section className="bg-creme flex flex-col">
      <div className="">
        <div className="">
          <Typography variant="h1">
            The right farm equipment for all needs
          </Typography>
          <Typography variant="h2">
            Our product portfolio covers all requirements. It does not make a
            difference to us whether your are looking for an almost new device,
            a power package or we will help you in your selection.
          </Typography>
        </div>
      </div>
      <div className="">
        <div className="">
          <Typography variant="h1">
            Key information at a glance quality withoit risk.
          </Typography>
          <Typography variant="h2">
            Our product portfolio covers all requirements. It does not make a
            difference to us whether your are looking for an almost new device,
            a power package or we will help you in your selection.
          </Typography>
        </div>
      </div>
    </section>
  );
};
