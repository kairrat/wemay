import React from 'react'

export const Banner = ({className,image, children,...props}) => {
    const buttonClassName = ` flex  justify-center items-center border-[1px] border-solid  cursor-pointer  ${className}`;

  return (
    <button className={buttonClassName}>
              {image && <img src={image} alt="Banner Image" />}
        {children}
    </button>
  )
}
