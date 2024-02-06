import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Contact.css';
function Contact(props) {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH WITH US:</span>
                <div className="email">
                    <input type="text" placeholder='enter your mail' />
                    <button>Join uS</button>
                </div>
                <div className="icons">
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>

                </div>
            </div>
        </div>
    );
}

export default Contact;