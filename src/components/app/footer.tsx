import * as React from 'react'
import {FunctionComponent} from 'react'
import Link from '../link'
import Image from 'next/image'

const about = [
  {
    path: '/about',
    label: 'About Us',
  },
  {
    path: '/q',
    label: 'App Store',
  },
  {
    path: '/s',
    label: 'Play Store',
  },
]

// const Title: FunctionComponent<{children: React.ReactNode}> = ({children}) => (
//   <h5 className="font-light font-mono tracking-wider text-xs text-gray-600 mb-2 uppercase">
//     {children}
//   </h5>
// )

const Item: FunctionComponent<{
  children: React.ReactNode
  path: string
}> = ({children, path}) => (
  <li className="py-1 md:text-sm text-base leading-relaxed">
    <Link href={path} activeClassName="underline">
      <a className="hover:text-blue-600 transition-colors ease-in-out duration-150">
        {children}
      </a>
    </Link>
  </li>
)

const FooterNavigation: FunctionComponent = () => {
  return (
    <nav className="w-full md:space-y-0 space-y-6 flex md:flex-row flex-col items-start justify-between gap-6 md:pt-14 pt-16 lg:pb-40 pb-16">
      <div className="space-y-5 pl-5 h-full flex flex-col md:items-start items-center lg:w-72 w-full">
        <Link href="/">
          <a className="flex md:flex-row flex-col lg:items-start md:items-center items-center md:text-left text-center lg:space-x-2 md:space-x-2 md:space-y-0 space-y-2">
            <Image
              src={
                '/images/cabo-care.png'
              }
              width={280}
              height={280}
              alt={`Cabo Care Los Cabos`}
              className="md:w-8 w-12 flex-shrink-0"
            />
            <div className="mt-1 text-md  tracking-tight">
              {`CaboCare es una App cuya mision es la de salvar y mejorar la vida de las personas.`}
            </div>
          </a>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:pr-6 md:gap-10 md:text-left text-center md:items-start items-center md:w-auto w-full">
        <ul>
          {about.map((link) => (
            <Item path={link.path} key={link.path}>
              {link.label}
            </Item>
          ))}
        </ul>
      </div>
    </nav>
  )
}

const Footer: FunctionComponent = () => {
  return (
    <div className="bg-gray-50">
      <footer className="max-w-screen-xl w-full mx-auto xl:px-0 px-5">
        <FooterNavigation />
        <small className="space-x-6 py-6 text-xs w-full flex items-center md:justify-end justify-center text-gray-500">
          <div>©cabocare</div>
          <Link href="/privacy">
            <a>Terms & Conditions</a>
          </Link>
        </small>
      </footer>
    </div>
  )
}

export default Footer
