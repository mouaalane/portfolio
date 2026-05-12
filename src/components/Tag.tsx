import { MONO } from "../lib/constants";

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <span
      className="inline-block px-[6px] py-[2px] bg-[#282c34] border border-[#ABB2BF]/40 text-[#ABB2BF]"
      style={{ fontFamily: MONO, fontSize: 11 }}
    >
      {label}
    </span>
  );
}
