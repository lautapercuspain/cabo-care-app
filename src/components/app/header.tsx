import * as React from 'react'
import {FunctionComponent} from 'react'
import Link from '../link'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  return (
    <>
      <header className="h-15 px-5 py-3 xs:justify-start mb-8 border-b border-gray-100">
        <div className="flex justify-center md:justify-start w-full max-w-screen-xl mx-auto">
          <div className="flex xs:justify-start sm:justify-start md:justify-start">
            <Link href="/">
              <a className="flex">
                <Image
                  src="/images/logo.png"
                  layout="fixed"
                  width={163}
                  height={38}
                  priority={true}
                  quality={100}
                  objectFit="cover"
                  alt="Cabo Care"
                  className="w-8 mr-1 m-3"
                />
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
