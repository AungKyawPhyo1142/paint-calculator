import React from "react";

interface Props {
  className?: string;
}
const InfoIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#000" stroke-width="2" />
      <path
        d="M12.5 7.5C12.5 7.77614 12.2761 8 12 8C11.7239 8 11.5 7.77614 11.5 7.5C11.5 7.22386 11.7239 7 12 7C12.2761 7 12.5 7.22386 12.5 7.5Z"
        fill="#000"
        stroke="#000"
      />
      <path d="M12 17V10" stroke="#000" stroke-width="2" />
    </svg>
  );
};

export default InfoIcon;
