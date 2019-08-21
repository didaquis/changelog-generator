import Head from 'next/head'
import configuration from '../data/configuration.json'

const Header = () => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>{configuration.productName} changelog</title>

			<link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
			<link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="/static/favicon.ico" />
			<script src="/static/vendor/jquery/jquery.min.js"></script>
			<script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
		</Head>
	)
}

export default Header
