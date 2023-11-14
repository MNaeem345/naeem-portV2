import  React, {useState } from 'react';
import { Container, Card } from '@material-ui/core';
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
    
            
                <Tabs
                    
                    textColor="white"
                    TabIndicatorProps={{
                        style: {
                          backgroundColor: "#39FF14"
                        }
                      }}
                    className='tabs'
                    value={currentTabIndex} 
                    onChange={handleTabChange}
                >
                    <Tab label="Data Analyst" className='tabs'/>
                    <Tab label="Software Engineer" className='tabs'/>
                    
                </Tabs>
                {currentTabIndex === 0 && (
                    <Container className='all-cards'>
                       <Card className='experiences-cards'>
                        <h1>Data Analyst</h1>
                        <p className='company-name'>Sunfield Advisors | <p className='date'>November 2022 - Present</p></p>
                        <div className='experience-description'>
                            
                        <p className='desc'>● Worked with a team of 3-4 senior partners to help close Mergers and Acquisition deals between companies.</p>
                            <p className='desc'>● Utilized tools like Factset, and ZoomInfo to help look for potential buyers and sellers for each individual project
                                where the client wanted a suitable investor.</p>
                            <p className='desc'>● Assisted with the contact us form on the company website with a freelance engineer and was able to properly send forms to the head partner from potential clients.</p>
                        </div>

                    </Card> 
                    </Container>
                )}
                {currentTabIndex === 1 && (
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
                
            

    </Container>
    </div>
    </section>
  )
}

export default Experience