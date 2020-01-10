import React, { Component } from 'react'
import emailjs from 'emailjs-com'

class Contact extends Component {
  state = {
    name: null,
    email: null,
    subject: null,
    message: null,
    errors: {
      name: null,
      email: null,
      subject: null,
      message: null
    }
  }

	sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				'portfolio',
				'template_2rkVUPhJ',
				e.target,
				'user_Fbg0gkdOYX4sEe4gibPK3'
			)
			.then(
				response => {
					console.log(response.text)
				},
				error => {
					console.log(error.text)
				}
			)
	}

	render() {
		return (
			<div>
				<form className='contact-form' onSubmit={this.sendEmail} noValidate>
					<input type='text' name='name' placeholder='Name' noValidate />
					<input type='email' name='email' placeholder='E-Mail' noValidate />
					<input type='text' name='subject' placeholder='Subject' noValidate />
					<textarea name='message' placeholder='Message' noValidate />
					<input type='submit' value='Send' />
				</form>
			</div>
		)
	}
}

export default Contact