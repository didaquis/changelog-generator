import configuration from '../data/configuration.json'

const Jumbotron = () => {
	return (
		<div className="jumbotron bg-dark text-light mb-0">
			<h1 className="mb-0">{configuration.titleOfWebsite}</h1>
		</div>
	)
}

export default Jumbotron