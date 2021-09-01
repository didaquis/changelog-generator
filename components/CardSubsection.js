import { Fragment } from 'react'

const CardSubsection = (props) => {
	return (
		<Fragment>
			<h6 className="card-subtitle mt-2 mb-1 font-weight-bold">{props.title}</h6>
			
			<ul className="list-style">
				{
					props.data.map( (data, index) => {
						return (
							<li key={index} className="mb-1">{data}</li>
						)
					})
				}
			</ul>
		</Fragment>
	)
}

export default CardSubsection