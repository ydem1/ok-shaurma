import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
  children: ReactNode;
  className?: string;
  mainClassName?: string;
  isShownHeader?: boolean;
  isShownFooter?: boolean;
}

export const PageWrapper: FC<Props> = ({
  children,
  className,
  mainClassName,
  isShownHeader = true,
  isShownFooter = true,
}) => (
  <div className={cn("flex h-screen flex-col", className)}>
    {isShownHeader && <Header />}
    <main className={cn("flex-1", mainClassName)}>{children}</main>
    {isShownFooter && <Footer />}
  </div>
);
