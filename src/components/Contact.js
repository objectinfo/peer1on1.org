import React, { Component } from 'react'
import NewsletterForm from './NewsletterForm'
import styled, {css} from 'styled-components';

const borderRadius = '3px';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 500px;
  margin: 2.5rem 0;
  font-size: 14px;
`;

const ContactFormItemBox = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const ContactFormItemGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const ContactFormLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  background: var(--white);
`;

const ContactFormInputMixin = css`
  font-family: inherit;
  flex-grow: 1;
  box-sizing: border-box;
  display: block;
  margin: 0;
  border: 1px solid #bababa;
  padding: 1rem 2rem;
  border-radius: ${borderRadius};
  line-height: 1.25em;
  transition: border-color 0.2s;
  resize: none;
  width: 100%;
  transition: 0.3s ease all;
  background: transparent;
`;

const ContactFormInput = styled.input`
  ${ContactFormInputMixin}

  :valid,
  :invalid:not(:empty),
  :active,
  :focus {
    padding-bottom: 0.5rem;
    padding-top: 2.5rem;
  }
  :required:invalid:not(:empty) {
    border-color: #ff3d3d;
  }  
`;

const ContactFormInputSelect = styled.select`
  ${ContactFormInputMixin}
  background: none;
  appearance: none;
`;

const ContactFormTextarea = styled.textarea`
  font-family: inherit;
  flex-grow: 1;
  box-sizing: border-box;
  display: block;
  margin: 0;
  border: 1px solid #bababa;
  padding: 1rem 2rem;
  border-radius: ${borderRadius};
  line-height: 1.25em;
  transition: border-color 0.2s;
  resize: none;
  width: 100%;
  transition: 0.3s ease all;
  background: transparent;
`;

const ContactFormLabelAfter = styled(ContactFormLabel)`
&:after {
  content: '';
  position: absolute;
  right: 2.5rem;
  top: 50%;
  border-right: 1px solid;
  border-bottom: 1px solid;
  height: 10px;
  width: 10px;
  transform: translateY(-75%) rotate(45deg);
  pointer-events: none;
`;

const ContactFormSubmitButton = styled.input`
background: #00c2bd;
color: #fff;
text-transform: uppercase;
text-decoration: none;
font-weight: 700;
letter-spacing: .05em;
font-size: 1.2rem;
display: inline-block;
padding: 0.75rem 1.5rem;
border: none;
transition: all .2s ease;
cursor: pointer;
border-radius: 3px;
border-radius: ${borderRadius};
`;

export default class Contact extends Component {
  static defaultProps = {
    name: 'Contact Form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }
  // action='https://formspree.io/peer1on1.org@gmail.com'
  render() {
    const { name, subject } = this.props
    const action = ''

    return (
      <>
        <h1>Stay in Touch</h1>
        <p>
          Enter your email address and message below.
        </p>
        <ContactForm
          name={name}
          method="POST"
          data-netlify="true"
          action="/contact"
        >
          <ContactFormItemBox>
    <ContactFormLabel>
      <ContactFormInput
        type='text'
        placeholder='Name'
        name='name'
        required
      />
    </ContactFormLabel>
    </ContactFormItemBox>

    <ContactFormItemBox>
    <ContactFormLabel>
      <ContactFormInput
        type='email'
        placeholder='Email'
        name='_replyto'
        required
      />
    </ContactFormLabel>
    </ContactFormItemBox>

    <ContactFormItemBox>
    <ContactFormLabelAfter>
      <ContactFormInputSelect
        
        name='type'
        defaultValue='Type of Enquiry'
        required
      >
        <option disabled hidden>
          Type of Enquiry
        </option>
        <option>Need to know more</option>
        <option>Want to say hello</option>
      </ContactFormInputSelect>
    </ContactFormLabelAfter>
    </ContactFormItemBox>
    <ContactFormItemBox>
    <ContactFormLabel>
      <ContactFormTextarea
        placeholder='Message'
        name='message'
        rows='8'
        required
      />
    </ContactFormLabel>
    </ContactFormItemBox>
    <ContactFormItemBox>
    {!!subject && <input type='hidden' name='subject' value={subject} />}
    <input type='hidden' name='form-name' value={name} />
    {/* <input type="hidden" name="_next" value="https://peer1on1.org/about" /> */}
    <ContactFormSubmitButton
      type='submit'
      value='Submit'
    />
    </ContactFormItemBox>
  </ContactForm>
        <h3>You can also find us around the web.</h3>
        <ul>
          <li>
            <strong>Facebook</strong>:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Peer1on1-400446700310087/">
              Peer 1 On 1
            </a>
          </li>
        </ul>
      </>
    )
  }
}
