import React from 'react'
import Link from 'next/link';

type ButtonType = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps {
  href: string,
  text: string,
}

function Button({text, href, type='primary'}: ButtonProps ) {
  
  let aClassNames = ""
  if (type === 'primary') {
    aClassNames = 'bg-primary text-gray-900'
  } else if (type === 'secondary') {
    aClassNames = 'bg-secondary text-gray-900'
  } else {
    aClassNames = 'text-orange'
  }
  
  return (
    <Link href={href}>
      <a className="bg-primary block py-2 px-7 rounded text-gray-900 font-medium">{text}</a>
    </Link>
  )
}

export default Button;