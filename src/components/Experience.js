import React, { useState,useEffect } from 'react';
import { Container, Card } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import '../components/Experience.css';

function Experience() {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

    const handleTabChange = (event, tabIndex) => {
        setCurrentTabIndex(tabIndex);
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 900);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id='experience'>
            <div className='all-about'>
                <Container maxWidth="md">
                    <h1 className="ab-me">{`Experiences/>`}</h1>
                </Container>
                <Container maxWidth="md" className='all-cards'>
                    <div className="tabs-content">
                        <div className={`tabs-container ${isSmallScreen ? 'tabs-horizontal' : 'tabs-vertical'}`}>
                            <Tabs
                                TabIndicatorProps={{style: {background:'green'}}}
                                orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                                variant="scrollable"
                                value={currentTabIndex}
                                onChange={handleTabChange}
                                className={isSmallScreen ? 'tabs-horizontal' : 'tabs-vertical'}
                            >
                                <Tab label="Front-End Developer" className='tabs' />
                                <Tab label="Data Analyst" className='tabs' />
                                <Tab label="Software Engineer" className='tabs' />
                            </Tabs>
                        </div>
                        {currentTabIndex === 0 && (
                            <Card className='experiences-cards'>
                                <h1>Front-End Engineer</h1>
                                <p className='company-name'>Co.Lab | <span className='date'>November 2023 - February 2024</span></p>
                                <div className='experience-description'>
                                    <p className='desc'>● Collaborated with a group of Product Managers, Product Designer and Developers to create a groundbreaking application in the health industry for users to be able to track how much time they are spending outside.</p>
                                    <p className='desc'>● Addressed the challenge of encouraging users to spend more time outdoors by implementing real-time data integration using Node.js and MongoDB for outdoor activities, along with push notifications and goal-setting features to enhance user engagement and track progress effectively.</p>
                                    <p className='desc'>● Learned a plethora of new skills in a matter of two to three weeks such as React Native, Backend implementation with MongoDB, and Node.Js and collaborated in a professional technical setting.</p>
                                    <p className='desc'>● Conceptualized the Front-End with the Product Designer and other Developers to create a user friendly flow to allow the user to have an easier navigation through the application.</p>
                                    <p className='desc'>● Tested and deployed said application to the AppStore and the Google Play Store along with beta versions of the app to test minor bugs and issues with the application.</p>
                                    <p className='desc'>● Coded the front-end and implemented the back-end of the application and optimized user experience by 90%.</p>
                                </div>
                            </Card>
                        )}
                        {currentTabIndex === 1 && (
                            <Card className='experiences-cards'>
                                <h1>Data Analyst</h1>
                                <p className='company-name'>Sunfield Advisors | <span className='date'>March 2023 - Present</span></p>
                                <div className='experience-description'>
                                    <p className='desc'>● Provided support to the Senior Deal Making team throughout the entire deal cycle.</p>
                                    <p className='desc'>● Contributed research related skills to allow the senior team to allow them to make more level headed decisions in the deal cycle and how to look for potential and future clients.</p>
                                    <p className='desc'>● Collaborated with the market research team in the IT industry, utilizing financial software and tools for comprehensive data analysis and reporting.</p>
                                    <p className='desc'>● Proficient in Excel-based financial and data modeling, showcasing strong quantitative and analytical skills for interpreting complex market data.</p>
                                </div>
                            </Card>
                        )}
                        {currentTabIndex === 2 && (
                            <Card className='experiences-cards'>
                                <h1>Software Engineer</h1>
                        <p className='company-name'>Coding Temple | <p className='date'>January 2022 - May 2022</p></p> 
                        <div className='experience-description'>
                        <p className='desc'>● Created database tables using PostgreSQL and insomnia to test the users' updates to the database.</p>
                            <p className='desc'>● Built and implemented data tables using ElephantSQL and created functional ERDs for specific projects</p>
                            <p className='desc'>● Developed a web application that implements Flask as both a Front-End and a Back-End and React as a Front-End
                                and Flask as the Back-End.</p>
                            <p className='desc'>● Managed a team to help create design focused static HTML and CSS pages for clients.</p>
                            <p className='desc'>● Established a great understanding of Object Oriented Programming (OOP) and implemented the concept in
                        various projects.</p>
                            <p className='desc'>● Managed 3 REST APIs using ReactJS and Flask in combination with PostgreSQL Databases.</p>
                        </div>
                            </Card>
                        )}
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Experience;
/** 
import  React, {useState } from 'react';
import { Container, Card, Box } from '@material-ui/core';
import '../components/Experience.css';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";




function Experience() {
    

    const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);


    
  };
  return (
    <section id='experience'>
    <div className='all-about'>
    <Container maxWidth="md">
    <h1 className="ab-me">{`Experiences/>`}</h1>
    </Container>
    <Container maxWidth="sm" className='all-cards'>
    
    <div className="tabs-content">
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={currentTabIndex}
                            onChange={handleTabChange}
                            className='tabs'
                        >
                            <Tab label="Front-End Developer" className='tabs' />
                            <Tab label="Data Analyst" className='tabs' />
                            <Tab label="Software Engineer" className='tabs' />
                        </Tabs>
                
                {currentTabIndex === 1 && (
                    <Container className='all-cards'>
                       <Card className='experiences-cards'>
                        <h1>Data Analyst</h1>
                        <p className='company-name'>Sunfield Advisors | <p className='date'>November 2022 - Present</p></p>
                        <div className='experience-description'>
                            
                        <p className='desc'>● Provided support to the Senior Deal Making team throughout the entire deal cycle.</p>
                            <p className='desc'>● Contributed research related skills to allow the senior team to allow them to make more level headed decisions in the deal cycle and how to look for potential and future clients.</p>
                            <p className='desc'>● Collaborated with the market research team in the IT industry, utilizing financial software and tools for comprehensive data analysis and reporting.</p>
                            <p className='desc'>● Proficient in Excel-based financial and data modeling, showcasing strong quantitative and analytical skills for interpreting complex market data.</p>
                        </div>

                    </Card> 
                    </Container>
                )}
                {currentTabIndex === 0 && (
                    <Container className='all-cards'>
                       <Card className='experiences-cards'>
                        <h1>Front-End Engineer</h1>
                        <p className='company-name'>Co.Lab | <p className='date'>November 2023 - February 2024</p></p> 
                        <div className='experience-description'>
                        <p className='desc'>● Collaborated with a group of Product Managers, Product Designer and Developers to create a groundbreaking application in the health industry for users to be able to track how much time they are spending outside.</p>
                            <p className='desc'>● Addressed the challenge of encouraging users to spend more time outdoors by implementing real-time data integration using Node.js and MongoDB for outdoor activities, along with push notifications and goal-settingfeatures to enhance user engagement and track progress effectively. </p>
                            <p className='desc'>● Learned a plethora of new skills in a matter of two to three weeks such as React Native, Backend implementation with MongoDB, and Node.Js and collaborated in a professional technical setting. </p>
                           
                            <p className='desc'>● Conceptualized the Front-End with the Product Designer and other Developers to create a user friendly flow to allow the user to have an easier navigation through the application. </p>
                            <p className='desc'>● Tested and deployed said application to the AppStore and the Google Play Store along with beta versions of the app to test minor bugs and issues with the application. </p>
                            <p className='desc'>● Coded the front-end and implemented the back-end of the application and optimized user experience by 90%.</p>
                        </div>
                        
                        
                    </Card>
                    </Container>
                )}
                {currentTabIndex === 2 && (
                    <Container className='all-cards'>
                       <Card className='experiences-cards'>
                        <h1>Software Engineer</h1>
                        <p className='company-name'>Coding Temple | <p className='date'>November 2021 - May 2022</p></p> 
                        <div className='experience-description'>
                        <p className='desc'>● Created database tables using PostgreSQL and insomnia to test the users' updates to the database.</p>
                            <p className='desc'>● Built and implemented data tables using ElephantSQL and created functional ERDs for specific projects</p>
                            <p className='desc'>● Developed a web application that implements Flask as both a Front-End and a Back-End and React as a Front-End
                                and Flask as the Back-End.</p>
                            <p className='desc'>● Managed a team to help create design focused static HTML and CSS pages for clients.</p>
                            <p className='desc'>● Established a great understanding of Object Oriented Programming (OOP) and implemented the concept in
                        various projects.</p>
                            <p className='desc'>● Managed 3 REST APIs using ReactJS and Flask in combination with PostgreSQL Databases.</p>
                        </div>
                        
                        
                    </Card>
                    </Container>
                )}
                
            
                    </div>
    </Container>
    </div>
    </section>
  )
}

export default Experience

**/