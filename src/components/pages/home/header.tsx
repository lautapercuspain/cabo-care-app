import * as React from 'react'
import {FunctionComponent} from 'react'
// import Image from 'next/image'
import Link from 'next/link'

type HeaderProps = {
  subheading?: string
  primaryCta?: {
    label?: string
    url?: string
  }
}

const Header: FunctionComponent<HeaderProps> = ({
  subheading = `Somos la primera aplicación móvil 
  en Los Cabos, que te permite encontrar el hospital más cercano en caso de emergencia.`,
  primaryCta = {label: 'Descargala ahora', url: '/'},
}) => {
  return (
    <header className="relative h-80 bg-gradient-to-r from-cc-green2 to-cc-green1 text-white md:-mt-5 md:rounded-b-lg  md:rounded-t-none rounded-lg ">
      <div className="absolute right-0 top-0 pl-1">
        <img
          src="/images/doctor-header.png"
          width={372}
          height={300}
          className="h-80 ml-1"
          alt="Cabo Care"
        />
        </div>
      <div className="z-10 absolute left-30 top-20">
        <div className=" text-center pl-2 pr-2 lg:pl-20 space-y-5 max-w-2xl mx-auto">
          <h2 className="sm:flex sm:justify-center sm:text-blue-300 xs:text-white md:text-white md:text-xl text-lg text-co text-left md:py-1 font-light leading-tight ">
            {subheading}
          </h2>
        {primaryCta ? (
          <div className="pt-10 flex md:flex-row flex-col md:space-y-0 space-y-4 space-x-2">
            {primaryCta.url && (
              <Link href={primaryCta.url}>
                <a className="md:w-auto w-full px-5 py-3 text-center rounded-md bg-blue-600 text-white font-semibold shadow-lg hover:bg-indigo-600 transform hover:scale-105 transition-all duration-150 ease-in-out">
                  {primaryCta.label}
                </a>
              </Link>
            )}
          </div>
        ) : null}
         </div>
      </div>
    
    </header>
  )
}

export default Header
