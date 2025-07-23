import React from "react";
import { PillButtonStyled } from "./PillButton.styles.ts";

export type PillButtonProps = {
  link: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  iconLeft?: boolean;
  icon?: React.ReactNode;
};

const PillButton: React.FC<PillButtonProps> = ({
  link,
  children,
  onClick,
  className,
  iconLeft = false,
  icon,
}) => (
  <PillButtonStyled href={link} onClick={onClick} className={className}>
    {iconLeft && icon ? (
      <span
        style={{ marginRight: 8, display: "inline-flex", alignItems: "center" }}
      >
        {icon}
      </span>
    ) : null}
    {children}
  </PillButtonStyled>
);

export default PillButton;
