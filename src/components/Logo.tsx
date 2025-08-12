import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function Logo({ className = '', height = 32, width = 32 }: LogoProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#3B82F6"/>
      <path
        d="M8 12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V12Z"
        fill="white"
      />
      <path
        d="M12 16C12 14.8954 12.8954 14 14 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H14C12.8954 20 12 19.1046 12 18V16Z"
        fill="#3B82F6"
      />
      <text
        x="16"
        y="28"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="600"
      >
        DOCS
      </text>
    </svg>
  );
}
