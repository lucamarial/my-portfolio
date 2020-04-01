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
				<div className='tech-container'>
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
