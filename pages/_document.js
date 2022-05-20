import { Html, Head, Main, NextScript } from 'next/document'
import configuration from '../data/configuration.json'

export default function Document () {
	return (
		<Html lang={configuration.languageOfWebsite}>
			<Head>
				<link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
				<link href="/styles/print-styles.css" rel="stylesheet" />
				<link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="/favicon.ico" />
				<script src="/vendor/jquery/jquery.slim.min.js"></script>
				<script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
