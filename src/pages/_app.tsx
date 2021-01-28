import * as React from 'react'
import NextApp, {NextWebVitalsMetric} from 'next/app'
import {CacheProvider} from '@emotion/core'
import {MDXProvider} from '@mdx-js/react'
import {DefaultSeo} from 'next-seo'
import {cache} from 'emotion' // Use only { cache } from 'emotion'. Don't use { css }.
import AppLayout from 'components/app/layout'
import mdxComponents from 'components/mdx'
import defaultSeoConfig from 'next-seo.json'
import '@reach/listbox/styles.css'
import '@reach/dialog/styles.css'
import '@reach/tabs/styles.css'
import '../styles/index.css'
import 'focus-visible'

declare global {
  interface Window {
    ahoy: any
    _cio: any
    fbq: any
    becomeUser: any
  }
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.debug(metric)
}

export default class App extends NextApp {
  render() {
    const {Component, pageProps} = this.props
    const AppComponent = Component as any

    const getLayout =
      AppComponent.getLayout ||
      ((Page: any) => (
        <AppLayout>
          <Page {...pageProps} />
        </AppLayout>
      ))

    return (
      <>
        <DefaultSeo {...defaultSeoConfig} />
        <MDXProvider components={mdxComponents}>
          <CacheProvider value={cache}>
            {getLayout(Component, pageProps)}
          </CacheProvider>
        </MDXProvider>
      </>
    )
  }
}
