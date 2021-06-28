import React from 'react'
import Link from 'next/link';

interface ButtonProps {
  href: string,
  text: string,
}

export default function Button({text, href}: ButtonProps ) {
  return (
    <Link href={href}>
      <a className="bg-primary block py-2 px-7 rounded text-gray-900 font-medium">{text}</a>
    </Link>
  )
}
