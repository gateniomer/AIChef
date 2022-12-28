import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>AIChef</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <meta name = "author" content = "Omer Gatenio" />
    <meta name='og:title' content='AIChef'/>
    <meta name='og:description' content='ChefAI'/>
    <meta name='og:url' content='https://gateniomer.github.io/chefai/'/>
    </Head>
  <Header/>
  <div style={{maxWidth:'90%',margin:'0 auto'}}>
    <Component {...pageProps} />
  </div>
  </>
}
