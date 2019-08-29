import CardSubsection from './CardSubsection'
import configuration from '../data/configuration.json'

const Card = (props) => {
	return (
		<div className="col-sm-12 mb-3">
			<div className="card bg-info">
				<div className="card-header">
					<h5 className="card-title mt-3 text-monospace text-white">{props.header} <em className="font-weight-lighter text-light">({props.date})</em></h5>
				</div>
				<div className="card-body bg-light">
					<CardSubsection title={configuration.textOfListHeader} data={props.changes}/>
				</div>
			</div>
		</div>
	)
}

export default Card
