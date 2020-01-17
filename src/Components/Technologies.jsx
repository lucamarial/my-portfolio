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
				return <li>{framework}</li>
			})
		}

		if (data) {
			skillList = data.softSkills.map(skill => {
				return <li>{skill}</li>
			})
		}

		if (data) {
			dependencyList = data.dependencies.map(dependency => {
				return <li>{dependency}</li>
			})
		}

		return (
			<>
				<div id='tech-container'>
					<div id='tech-wrapper'>
						<div id='framework-list'>
							<p className='list-header'>Frameworks / Libraries</p>
							<ul className='tech-point'>{frameworkList}</ul>
						</div>
						<div id='skill-list'>
							<p className='list-header'>Soft Skills / Misc</p>
							<ul className='tech-point'>{skillList}</ul>
						</div>
						<div id='dependency-list'>
							<p className='list-header'>Dependencies etc</p>
							<ul className='tech-point'>{dependencyList}</ul>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Technologies
