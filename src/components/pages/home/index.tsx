import React, {FunctionComponent} from 'react'
import Card from './card'
import Link from 'next/link'
// import Image from 'next/image'
import {find} from 'lodash'
import Markdown from 'react-markdown'
import Header from './header'
import homepageData from './homepage-data'

const Home: FunctionComponent = () => {
  const seguridadMedica: any = find(homepageData, {id: 'seguridad-medica'})
  const saludMedica: any = find(homepageData, {id: 'tu-salud'})

  return (
    <>
      <div className="space-y-5">
        <Header />
        <h1 className="text-xl align-center">
          Descrubre los beneficios de ser parte Cabocare
        </h1>
        <div className="grid lg:grid-cols-8 grid-cols-1 gap-5">
          <FeatureCard
            width={85}
            bgValue="bg-cc-blueDark"
            height={85}
            source="/images/promo.png"
            text="Llama al hospital más cercano en caso de emergencia"
          />
          <FeatureCard
            bgValue="bg-cc-orange"
            width={85}
            height={85}
            source="/images/marker.png"
            text="Encuentra hospitales, doctores y farmacias cerca de ti"
          />
          <FeatureCard
            bgValue="bg-cc-blueSoft"
            width={75}
            height={67}
            source="/images/search.png"
            text="Accede a promociones exclusives de servicios medicos cada mes"
          />
          <FeatureCard
            bgValue="bg-cc-green1"
            width={72}
            height={72}
            source="/images/doctor.png"
            text="Guarda doctores, hospitales, farmacias y promociones en tus favoritos"
          />
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-5">
          <div className="lg:col-span-12 space-y-5">
            <CardHorizontal resource={seguridadMedica} />
            <CardHorizontal resource={saludMedica} />
          </div>
        </div>
      </div>
    </>
  )
}

type Resource = {
  path: string
  poster: string
  name: string
  title: string
  byline: string
  description: string
  resources: Resource[]
}
interface FeatureCardProps {
  source: string
  height: number
  width: number
  text: string
  bgValue: string
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Card
      className={`${props.bgValue} lg:col-span-2 flex items-cente text-white`}
    >
      <div className="flex items-center py-2 ">
        <p className="sm:text-md p-2">{props.text}</p>
        <img
          src={props.source}
          height={props.height}
          width={props.width}
          className="sm:w-4 md:w-8 w-12 flex-shrink-0"
          alt="Cabo Care"
        />
      </div>
    </Card>
  )
}

const CardHorizontal: FunctionComponent<{
  resource: Resource
  className?: string
}> = ({resource, className = 'border-none my-4'}) => {
  return (
    <Card className={className}>
      <>
        <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 items-center sm:text-left text-center">
          {resource.poster && (
            <Link href={resource.path}>
              <a className="block sm:w-auto w-24">
                <img
                  src={resource.poster}
                  width={585}
                  height={331}
                  className="w-full"
                  alt={`illustration for ${resource.title}`}
                />
              </a>
            </Link>
          )}
          <div className="flex flex-col justify-center sm:items-start items-center">
            <h2 className=" uppercase font-semibold text-xs tracking-tight text-gray-700 mb-1">
              {resource.name}
            </h2>
            <Link href={resource.path}>
              <a className="hover:text-cc-green2 pt-2 mb-2">
                <h3 className="text-xl font-bold leading-tighter">
                  {resource.title}
                </h3>
              </a>
            </Link>
            <Markdown className="prose prose-sm max-w-none pt-2">
              {resource.description}
            </Markdown>
          </div>
        </div>
      </>
    </Card>
  )
}

export default Home
