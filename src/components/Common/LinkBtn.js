import Link from 'next/link'
import React from 'react'
import Bodytext from './Bodytext'

export default function LinkBtn({text,className,click}) {
  return (
    <div>
        <Link href={click}>
        <Bodytext text={text} className={className}/>
        </Link>
    </div>
  )
}
