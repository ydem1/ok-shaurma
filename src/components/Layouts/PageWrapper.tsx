import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { useGetContactQuery } from "src/store/contact";
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
}) => {
  const { data: contact } = useGetContactQuery();

  return (
    <div className={cn("flex h-screen flex-col", className)}>
      {isShownHeader && <Header {...contact} />}
      <main className={cn("flex-1", mainClassName)}>{children}</main>
      {isShownFooter && <Footer {...contact} />}
    </div>
  );
};
