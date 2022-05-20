import Head from 'next/head'
import configuration from '../data/configuration.json'

function MyApp ({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="description" content={configuration.titleOfWebsite} />
				<title>{configuration.titleOfWebsite}</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
	
export default MyApp