import configuration from '../data/configuration.json'

const Jumbotron = () => {
	return (
		<div className="jumbotron mt-3 mb-3 bg-dark text-light">
			<h1 className="mb-0">{configuration.titleOfWebsite}</h1>
		</div>
	)
}

export default Jumbotron