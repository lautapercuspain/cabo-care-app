import React, {FunctionComponent} from 'react'
import Card from './card'
import Link from 'next/link'
import Image from 'next/image'
import { find } from 'lodash'
import Textfit from 'react-textfit'
import Markdown from 'react-markdown'
import Header from './header'
import homepageData from './homepage-data'

import Collection from './collection'

const Home: FunctionComponent = () => {

  const seguridadMedica: any = find(homepageData, {id: 'seguridad-medica'})
  const saludMedica: any = find(homepageData, {id: 'tu-salud'})

  return (
    <>
      <div className="space-y-5">
        <Header />
        <h1 className="text-xl align-center">Descrubre los beneficios de ser parte Cabocare</h1>
        <div className="grid lg:grid-cols-8 grid-cols-1 gap-5">
          <FeatureCard width={85} height={85} source="/images/promo.png" text="Encuentra promociones de servicios medicos cerca de ti"/>
          <FeatureCard width={85} height={85} source="/images/marker.png" text="Encuentra promociones de servicios medicos cerca de ti"/>
          <FeatureCard width={75} height={67}source="/images/search.png" text="Encuentra promociones de servicios medicos cerca de ti"/>  
          <FeatureCard width={72} height={72} source="/images/doctor.png" text="Encuentra promociones de servicios medicos cerca de ti"/>
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
  source: string,
  height: number,
  width: number,
  text:string,
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Card className="lg:col-span-2 flex items-center sm:bg-gray-900 bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 text-white ">
        <div className="flex items-center py-2 ">
          <p className="sm:text-md p-2">{props.text}</p>
          <Image
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

type CardProps = {
  data: Resource
  className?: string
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
              <a
                className="block flex-shrink-0 sm:w-auto w-24"
              >
                <Image
                  src={resource.poster}
                  width={585}
                  height={331}
                  layout="fixed"
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
              <a
                className="hover:text-blue-600"
              >
                <h3 className="text-xl font-bold leading-tighter">
                  {resource.title}
                </h3>
              </a>
            </Link>
            <Markdown className="prose prose-sm max-w-none">
              {resource.description}
            </Markdown>
          </div>
        </div>
      </>
    </Card>
  )
}

const CardVerticalLarge: FunctionComponent<CardProps> = ({data}) => {
  const {path, image, title, name, byline} = data
  return (
    <Card className="border-none flex flex-col items-center justify-center text-center sm:py-8 py-6">
      <>
        {image && (
          <Link href={path}>
            <a
              className="mb-2 mx-auto w-24"
            >
              <Image
                width={140}
                height={140}
                src={image}
                alt={`illustration for ${title}`}
              />
            </a>
          </Link>
        )}
        <h2 className="uppercase font-semibold text-xs mb-1 text-gray-700">
          {name}
        </h2>
        <Link href={path}>
          <a
            className="hover:text-blue-600"
          >
            <h3 className="md:text-lg text-base sm:font-semibold font-bold leading-tight">
              <Textfit mode="multi" min={14} max={20}>
                {title}
              </Textfit>
            </h3>
          </a>
        </Link>
        <div className="text-xs text-gray-600 mt-1">{byline}</div>
      </>
    </Card>
  )
}


export default Home
