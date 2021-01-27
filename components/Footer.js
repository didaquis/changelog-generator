import configuration from '../data/configuration.json'

const Footer = () => {
	const isLinkReadyToBeDisplayed = !!(configuration.footerUrlLink && configuration.footerTextLink)

	let footerContent = null
	if (isLinkReadyToBeDisplayed) {
		footerContent = <span className="text-muted font-weight-light">Made by <a target="_blank" rel="noreferrer noopener" className="text-info" href={configuration.footerUrlLink}>{configuration.footerTextLink}</a></span>
	}

	return (
		<footer className="footer mt-auto py-3 bg-dark border-top border-info">
			<div className="container text-center">
				{
					footerContent
				}
			</div>
		</footer>
	)
}

export default Footer