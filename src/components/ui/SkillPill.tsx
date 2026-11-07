import * as React from "react";

export interface SkillPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export function SkillPill({
  children,
  className = "",
  ...props
}: SkillPillProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-[13px] font-medium leading-none text-[#171717] bg-[#F5F4F1] border border-[#EAE9E6] shadow-[0_1px_2px_rgba(0,0,0,0.04)] select-none transition-colors hover:border-[#DCDAD5]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}

