import React from 'react';
import '../components/Contact.css';
import { Container, Card } from '@material-ui/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Your EmailJS service ID, template ID, and Public Key
      const serviceId = 'service_12vgaf6';
      const templateId = 'template_05auu48';
      const publicKey = 'Q8aXS-35nP58vu20J';
  
      // Create a new object that contains dynamic template params
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
      };
  
      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully!', response);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  

  return (
    <section id='contact'>
    <div>

    
    <Container maxWidth="md">
        <h1 className='ab-me'>Contact Me!</h1>
    </Container>
    <Container maxWidth="xs">
    <Card className='form-card'>
    <form onSubmit={handleSubmit} className='emailForm'>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='email-name'
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='email-email'
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          placeholder="write a message"
          onChange={(e) => setMessage(e.target.value)}
          className='email-msg'
        >
        </textarea>
        <button type="submit" className='email-btn'>Send Email</button>
      </form>
      </Card>
    </Container>
    
    </div>
    
    </section>
  )
}

export default Contact;