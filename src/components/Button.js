import React from 'react'

export const Button = ({className,image, children,onClick,...props}) => {
    const buttonClassName = ` flex  justify-center items-center  cursor-pointer  ${className}`;

  return (
    <button onClick={onClick} {...props}  className={buttonClassName}>
              {image && <img src={image} alt="Banner Image" />}
        {children}
    </button>
  )
}
