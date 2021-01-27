import React from 'react'

import Card from './Card'
import md5 from 'md5'

import changelog from '../data/changelog.json'
import configuration from '../data/configuration.json'

const GroupOfCards = () => {
	const defaultLimit = 10
	const limitOfCardsToShow = configuration.limitOfVersionsToShow || defaultLimit

	return (
		<React.Fragment>
			{
				changelog.versions.map((version, index) => {
					if (index >= limitOfCardsToShow) return null

					const key = md5(JSON.stringify(version))
					return (
						<Card
							key={key}
							header={version.tag}
							date={version.date}
							changes={version.changes}
						/>
					)
				})
			}
		</React.Fragment>
	)
}
  
export default GroupOfCards