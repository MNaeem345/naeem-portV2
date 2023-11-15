import React from 'react';
import '../components/Footer.css';

function Footer() {
  return (
    <section className='entire-footer'>
            <div className='container2'>
                <div className='icons'>
                    <a href='https://github.com/MNaeem345' target='_blank'><button  className='github-button2'><i class="fa-brands fa-square-github"></i>   @MNaeem345</button></a>
                    
                    <a href='https://www.linkedin.com/in/mohammed-n-28aa62238/' target='_blank'><button  className='linkedin-button2'><i class="fa-brands fa-linkedin"></i>   LinkedIn</button></a>
             

                </div>
                <div>
                <p className='rights'>@ 2023 Mohammed Naeem. All Rights Reserved</p>
                <a href="https://github.com/MNaeem345/naeem-portV2" target="_blank"><button className="project-button" >View Repository</button></a>
                </div>
            </div>
        </section>
  )
}

export default Footer