import type { ComponentProps } from "react";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./button.module.scss";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "solid" | "outline";
  arrow?: boolean;
};

export function Button({
  children,
  className = "",
  variant = "solid",
  arrow = true,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {arrow ? <Icon name="arrow-up" size={18} /> : null}
    </a>
  );
}
