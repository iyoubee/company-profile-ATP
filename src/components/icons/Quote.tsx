import React from 'react'

interface QuoteProps {
  className?: string
}

export const Quote: React.FC<QuoteProps> = ({ className }) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="&#240;&#159;&#167;&#172; quote - Dark" opacity="0.5">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.9306 22.8531C22.6266 22.8531 24 21.4958 24 19.8224C24 18.1491 22.6266 16.7918 20.9306 16.7918C17.8626 16.7918 19.908 10.9344 24 10.9344V9.51978C16.696 9.51978 13.8346 22.8531 20.9306 22.8531ZM15.1573 19.8224C15.1573 18.1491 13.7826 16.7918 12.0893 16.7918C9.01996 16.7918 11.0653 10.9344 15.1573 10.9344V9.51978C7.85463 9.51978 4.99196 22.8531 12.0893 22.8531C13.7826 22.8531 15.1573 21.4958 15.1573 19.8224Z"
          fill="#9FADBC"
        />
      </g>
    </svg>
  )
}
