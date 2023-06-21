import React, { FC } from "react";

interface Variants {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  p1m: string;
  p1r: string;
  p1y: string;
  p2: string;
  p2b: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  b1a: string;
  b1d: string;
  menuChecked: string;
  menuUnchecked: string;
  noScores: string;
  p2wrapper: string;
}

interface Props {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p1m"
    | "p1r"
    | "p1y"
    | "p2"
    | "p2b"
    | "p3"
    | "p4"
    | "p5"
    | "p6"
    | "b1a"
    | "b1d"
    | "menuChecked"
    | "menuUnchecked"
    | "p2wrapper"
    | "noScores";
  color?: "text-primary" | "text-primary-light" | "text-secondary";
  className?: string;
  children: React.ReactNode | string;
}

const typographyVariants: Variants = {
  h1: "font-sans text-5xl font-bold leading-56 ",
  h2: "font-sans text-40 font-bold leading-48 ",
  h3: "font-sans text-[28px] font-bold leading-[32px]",
  h4: "font-sans text-2xl font-bold leading-8",
  h5: "font-sans text-xl font-normal leading-7",
  h6: "font-sans text-lg font-bold leading-7",
  p1m: "font-sans text-2xl font-medium leading-8",
  p1y: "font-sans font-medium text-base",
  p1r: "font-sans text-2xl font-normal leading-8",
  p2: "font-sans text-base font-normal leading-6 ",
  p2b: "font-sans text-base font-bold leading-6 ",
  p3: "font-sans text-sm font-normal leading-18",
  p4: "font-sans text-xl font-medium",
  p5: "font-sans text-base font-normal",
  p6: "font-sans text-[18px] font-normal",
  b1a: "font-sans text-22 font-bold leading-35 ",
  b1d: "font-sans text-22 font-bold leading-35 ",
  menuChecked: "font-sans text-[20px] font-bold leading-[28px]",
  menuUnchecked: "font-sans text-[20px] font-regular leading-[28px]",
  noScores: "font-sans text-[24px] leading-[35px] font-bold tracking-[-2%]",
  p2wrapper:
    "font-sans text-base font-normal leading-6 overflow-hidden text-ellipsis whitespace-nowrap",
};

export const Typography: FC<Props> = ({
  variant,
  color = "text-white-text",
  className = "",
  children,
}) => {
  return (
    <div
      data-testid="typography"
      className={`${typographyVariants[variant]} ${color} ${className}`}
    >
      {children}
    </div>
  );
};
