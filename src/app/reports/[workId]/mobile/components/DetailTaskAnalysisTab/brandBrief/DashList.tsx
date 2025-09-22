import { ReactNode } from "react";

interface DashListProps {
  children: ReactNode;
}

export default function DashList({ children }: DashListProps) {
  return (
    <div className="flex gap-[3.5px]">
      <div>-</div>
      <div>{children}</div>
    </div>
  );
}
