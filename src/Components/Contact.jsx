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

  validEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

  inputHandler = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    let errors = this.state.errors

    switch (name) {
      case 'name':
        errors.name = 
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : null
        break
      case 'email':
        errors.email =
          validEmail.test(value)
            ? null
            : 'Email is not valid!'
        break
      case 'subject':
        errors.subject = 
          value.length < 1
            ? "Subject can't be empty!"
            : null
        break
      case 'message':
        errors.message =
          value.length < 5
            ? 'Message must be 5 characters long!'
            : null
        break
      default:
        break
    }

    this.setState({errors, [name]: value})
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
					<input type='text' name='name' placeholder='Name' noValidate onChange={this.inputHandler} />
					<input type='email' name='email' placeholder='E-Mail' noValidate onChange={this.inputHandler} />
					<input type='text' name='subject' placeholder='Subject' noValidate onChange={this.inputHandler} />
					<textarea name='message' placeholder='Message' noValidate onChange={this.inputHandler} />
					<input type='submit' value='Send' />
				</form>
			</div>
		)
	}
}

export default Contact