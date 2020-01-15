import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import { Form, Message, Button, List, Grid, Container } from 'semantic-ui-react'
import Steps from '../Images/steps.jpg'

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
            : 'Please enter a valid email address!'
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

    this.setState({
      errors, [name]: value
    })
  }

  submitHandler = async e => {
    e.preventDefault()
    await this.setState({
      form: e.target,
      [e.target.name.name]: e.target.name.value,
      [e.target.email.name]: e.target.subject.value,
      [e.target.subject.name]: e.target.subject.value,
      [e.target.message.name]: e.target.message.value,
    })

    if(this.validateForm(this.state.errors) && this.state.name !== null && this.state.email !== null && this.state.subject !== null && this.state.message !== null) {
      this.sendEmail(this.state.form)
    } else {
      this.setState({
        errorMessage: 'Please make sure that all fields contain valid information.'
      })
      console.log(this.state.errorMessage)
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
    let steps = <img src={Steps} alt='Steps' id='contact-img' />

    if(this.state.responseMessage) {
      responseMessage = 
        <Message 
          color='green' 
          content={this.state.responseMessage}
        />
    }

    if(this.state.errorMessage) {
      errorMessage = 
        <Message 
          color='red'
          content={this.state.errorMessage}
          type='promt'
        />
    }

		return (
      <>
        <div id='contact-wrapper'>
          {steps}
          <p id='contact-image-text'>Contact</p>
        </div>

        <Container id='contact-container'>
          <Grid centered container columns={2}>
            <h1>Reach me here</h1>
            <Grid.Row>
              <Grid.Column>
                <Form className='contact-form' onSubmit={this.submitHandler} noValidate>
                  <Form.Input
                    placeholder='Name'
                    name='name'
                    type='text'
                    error={errors.name ? {content: `${errors.name}`, pointing: 'below'} : null}
                    noValidate
                    onChange={this.inputHandler}
                  />
                  <Form.Input
                    placeholder='Email'
                    name='email'
                    type='email'
                    error={errors.email ? {content: `${errors.email}`, pointing: 'below'} : null}
                    noValidate
                    onChange={this.inputHandler}
                  />  
                  <Form.Input
                    placeholder='Subject'
                    name='subject'
                    type='text'
                    error={errors.subject ? {content: `${errors.subject}`, pointing: 'below'} : null}
                    noValidate
                    onChange={this.inputHandler}
                  />
                  <Form.TextArea
                    placeholder='Message'
                    name='message'
                    error={errors.message ? {content: `${errors.message}`, pointing: 'below'} : null}
                    noValidate
                    onChange={this.inputHandler}
                  />
                  {responseMessage}
                  {errorMessage}
                  <Button type='submit' content='Send' />
                </Form>
              </Grid.Column>
              <Grid.Column>
                <div className='contact-info'>
                  <List>
                    <List.Item>
                      <List.Icon name='map marker alternate' size='large' />
                      <List.Content>Stockholm | SWE</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name='mail' size='large' />
                      <List.Content>luca.lobacher@gmail.com</List.Content>
                    </List.Item>
                  </List>
                  <hr />
                  <List horizontal>
                    <List.Item>
                      <List.Icon name='github' size='huge' />
                    </List.Item>
                    <List.Item>
                      <List.Icon name='linkedin' size='huge' />
                    </List.Item>
                  </List>
                  <hr />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
		)
	}
}

export default Contact