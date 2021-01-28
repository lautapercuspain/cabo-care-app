import * as React from 'react'
import {FunctionComponent} from 'react'
import Link from '../link'
import Image from 'next/image'



const Header: FunctionComponent = () => {

  return (
    <>
      <header className="h-15 px-5 py-3 sm:mb-5 mb-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <Image  
                  src="/images/logo.png"
                  layout="fixed"
                  width={163}
                  height={38}
                  priority={true}
                  quality={100}
                  objectFit="cover"
                  alt="Cabo Care" 
                  className="w-8 mr-1" />
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
