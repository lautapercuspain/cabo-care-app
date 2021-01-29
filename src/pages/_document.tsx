import * as React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import {extractCritical} from 'emotion-server'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{__html: styles.css}}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/64/90/b5/6490b502-d6e1-2499-515c-af3226625075/AppIcon-1x_U007emarketing-0-5-0-0-85-220.png/200x200bb.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          />
        </Head>
        <body style={{fontFamily: 'Poppins'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
