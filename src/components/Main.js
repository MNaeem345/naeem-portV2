import React, { useState, useEffect } from 'react';
import '../components/Main.css';
import Container from '@material-ui/core/Container';
import Typed from 'react-typed';





function Main(){
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Hello my name is"
  )
    const [index, setIndex] = useState(0)
    useEffect(() => {
        if (index < fullText.length) {
        setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
        }, 150)
        }
    }, [index])



    const [text2, setText2] = useState("")
    const [fullText2, setFullText2] = useState(
        "Mohammed Naeem."
  )
    const [index2, setIndex2] = useState(0)
    useEffect(() => {
        if (index2 < fullText2.length) {
        setTimeout(() => {
            setText2(text2 + fullText2[index2])
            setIndex2(index2 + 1)
        }, 200)
        }
    }, [index2])
    
           

    return (
        
        <Container maxWidth='md' className='about-component'>
            
            <p className='about-title'>{text}</p>
            <h1 className='name'>{text2}</h1>
            
            <h2><Typed 
                strings={["I love developing.",
                        "I love building.",
                        "I love solving problems.",
                        "Welcome to my portfolio!"]}
                typeSpeed = {100}
                backSpeed = {50}
                loop
                
                />
            </h2>
            <p className='about-me'>I am a Front-End developer looking to create responsive and eye catching applications that users can find 
                apealing. 
            </p>
      

        </Container>
    )
}

export default Main;