import * as React from 'react'
import {FunctionComponent} from 'react'
import Image from 'next/image'
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
    <header className="md:px-16 px-8 md:py-40 md:-mt-5 md:rounded-b-lg md:rounded-t-none rounded-lg bg-gray-900 text-blue relative overflow-hidden">
      <div className="z-10 absolute left-30 top-20">
        <div className="text-center space-y-5 max-w-2xl mx-auto ">
          <h2 className="md:text-xl text-lg text-co text-left font-light leading-tight text-white">
            {subheading}
          </h2>
        </div>
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
      <Image
        src="/images/header-cabo-care.png"
        layout="fill"
        priority={true}
        quality={100}
        objectFit="cover"
        className="absolute left-0 top-0 py-10"
        alt="Cabo Care"
      />
    </header>
  )
}

export default Header
