import React, { Component } from 'react'
import axios from 'axios'

class Technologies extends Component {
	state = {
		data: null
	}

	componentDidMount() {
		axios.get('/data/technologies.json').then(response => {
			this.setState({
				data: response.data
			})
		})
	}

	render() {
		const data = this.state.data
		let frameworkList, skillList, dependencyList

		if (data) {
			frameworkList = data.frameworks.map(framework => {
				return <li key={data.frameworks.indexOf(framework)}>{framework}</li>
			})
		}

		if (data) {
			skillList = data.softSkills.map(skill => {
				return <li key={data.softSkills.indexOf(skill)}>{skill}</li>
			})
		}

		if (data) {
			dependencyList = data.dependencies.map(dependency => {
				return <li key={data.dependencies.indexOf(dependency)}>{dependency}</li>
			})
		}

		return (
			<>
				<div className='tech-container' data-aos='fade-right'>
					<div className='list-wrapper'>
						<p className='list-header'>Frameworks / Libraries</p>
						<ul>{frameworkList}</ul>
					</div>
					<div className='list-wrapper'>
						<p className='list-header'>Soft Skills / Misc</p>
						<ul>{skillList}</ul>
					</div>
					<div className='list-wrapper'>
						<p className='list-header'>Dependencies etc</p>
						<ul>{dependencyList}</ul>
					</div>
				</div>
			</>
		)
	}
}

export default Technologies
