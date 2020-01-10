import React, { Component } from 'react'
import emailjs from 'emailjs-com'

class Contact extends Component {
  state = {
    name: null,
    email: null,
    subject: null,
    message: null,
    errors: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    form: null,
    responseMessage: null,
    errorMessage: null
  }

  validEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

  validateForm = (errors) => {
    let valid = true
    Object.values(errors).forEach(
      val => val.length > 0 && (valid = false)
    )
    return valid
  }

  inputHandler = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    let errors = this.state.errors

    switch (name) {
      case 'name':
        errors.name = 
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : ''
        break
      case 'email':
        errors.email =
          this.validEmail.test(value)
            ? ''
            : 'Email is not valid!'
        break
      case 'subject':
        errors.subject = 
          value.length < 1
            ? "Subject can't be empty!"
            : ''
        break
      case 'message':
        errors.message =
          value.length < 5
            ? 'Message must be 5 characters long!'
            : ''
        break
      default:
        break
    }

    this.setState({errors, [name]: value})
  }

  submitHandler = async (e) => {
    e.preventDefault()

    await this.setState({
      form: e.target
    })

    if(this.validateForm(this.state.errors)) {
      this.sendEmail(this.state.form)
    } else {
      this.setState({
        errorMessage: 'Please make sure that all fields contain valid information.'
      })
    }
  }

	sendEmail = form => {
		emailjs
			.sendForm(
				'portfolio',
				'template_2rkVUPhJ',
				form,
				'user_Fbg0gkdOYX4sEe4gibPK3'
			)
			.then(
				response => {
          this.setState({
            responseMessage: 'Email was successfully sent!'
          })
					console.log(response.text)
				},
				error => {
          this.setState({
            errorMessage: 'The email could not be sent.'
          })
					console.log(error.text)
				}
			)
	}

	render() {
    const { errors } = this.state
    let responseMessage, errorMessage

    if(this.state.responseMessage) {
      responseMessage = <p>{this.state.responseMessage}</p>
    }

    if(this.state.errorMessage) {
      errorMessage = <p>{this.state.errorMessage}</p>
    }

		return (
			<div>
				<form className='contact-form' onSubmit={this.submitHandler} noValidate>
          <div>
            <input type='text' name='name' placeholder='Name' noValidate onChange={this.inputHandler} />
              {errors.name ? <span>{errors.name}</span> : null}
          </div>
          <div>
            <input type='email' name='email' placeholder='E-Mail' noValidate onChange={this.inputHandler} />
            {errors.email ? <span>{errors.email}</span> : null}
          </div>
          <div>
            <input type='text' name='subject' placeholder='Subject' noValidate onChange={this.inputHandler} />
            {errors.subject ? <span>{errors.subject}</span> : null}
          </div>
          <div>
            <textarea name='message' placeholder='Message' noValidate onChange={this.inputHandler} />
            {errors.message ? <span>{errors.message}</span> : null}
          </div>
					<input type='submit' value='Send' />
				</form>
        <div>
          {responseMessage}
          {errorMessage}
        </div>
			</div>
		)
	}
}

export default Contact