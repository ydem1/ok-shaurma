import { type SVGProps } from "react";
import cn from "classnames";
import { IconName } from "src/@types/name";

/**
 * Renders an SVG icon. The icon defaults to the size of the font. To make it
 * align vertically with neighboring text, you can pass the text as a child of
 * the icon and it will be automatically aligned.
 * Alternatively, if you're not ok with the icon being to the left of the text,
 * you need to wrap the icon and text in a common parent and set the parent to
 * display "flex" (or "inline-flex") with "items-center" and a reasonable gap.
 */
export function Icon({
  name,
  childClassName,
  className,
  children,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
  childClassName?: string;
}) {
  const spriteVersion =
    import.meta.env.MODE === "development" ? Date.now() : "1.0.0";

  if (children) {
    return (
      <span
        className={cn("font inline-flex items-center gap-1.5", childClassName)}
      >
        <Icon name={name} className={className} {...props} />
        {children}
      </span>
    );
  }

  return (
    <svg
      {...props}
      className={cn("inline h-[1.5em] w-[1.5em] self-center", className)}
      fill="currentColor"
    >
      <use href={`/icons/sprite.svg?v=${spriteVersion}#${name}`} />
    </svg>
  );
}
