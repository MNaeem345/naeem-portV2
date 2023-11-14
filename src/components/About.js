import React from 'react';
import Container from '@material-ui/core/Container';
import '../components/About.css';


function About() {
  return (
    <section id="about">

        <Container maxWidth="md">
        <h1 className='ab-me'>{`About/>`}</h1>

        <p className='ab-desc'>Hello, my name is Mohammed and I have a love of coding, designing and solivng problems. 
            I am a competent developer with knowledge in Python, Typescript, HTML5, CSS3, and Javascript(ES5, ES6, ES7, NodeJS).
            But even after learning these languages, 
		    I am still learning new languages and frameworks to keep myself updated with current trends 
			in the industry. 
            
            My Professional experience includes work as a software engineer at Coding Temple in the 
            past and as a data analyst intern at Sunfield Advisors currently, 
            demonstrating proficiency in Flask, React, database administration, and project management.
            
        </p>
        </Container>
    </section>
  )
}

export default About