import React from "react";
import "./Footer.css"


const Footer=()=>{
    return (
        <div className="footer">
            <div className="section_padding">
                <img src="./logo.png"/>
            <div className="footer-links">
                <div className="footer-links-div">
                    <h4>Explore Platform</h4>
                    <a href="/campus">
                        <p>Campus Amassador</p>
                    </a>
                    <a href="/careers">
                        <p>Careers</p>
                    </a>
                    <a href="/about">
                        <p>About Us</p>
                    </a>
                    <a href="/contact">
                        <p>Contact Us</p>
                    </a>
                    <a href="/blog">
                        <p>Blog</p>
                    </a>
                </div>
                <div className="footer-links-div">
                    <h4>Courses</h4>
                    <a href="/studyabroad">
                        <p>Study Abroad</p>
                    </a>
                    <a href="/projects">
                        <p>Visit Our Projects</p>
                    </a>
                    <a href="/mentorship">
                        <p>Mentorship Program</p>
                    </a>
                    <a href="/professional">
                        <p>Professional Courses</p>
                    </a>
                    <a href="/jobs">
                        <p>Healthcare Jobs</p>
                    </a>
                </div>
                <div className="footer-links-div">
                   <h4>Study Abroad</h4>
                   <a href="/uk">
                   <p>UK</p>
                   </a>
                   <a href="/usa">
                   <p>USA</p>
                   </a>
                   <a href="/dubai">
                   <p>Dubai</p>
                   </a>
                   <a href="/australia">
                   <p>Australia</p>
                   </a>
                   <a href="/france">
                   <p>France</p>
                   </a>
                   <a href="/germany">
                   <p>Germany</p>
                   </a>
                   <a href="/newzealand">
                   <p>New Zealand</p>
                   </a>
                </div>
                <div className="footer-links-div">
                    <h4>Follow Us On</h4>
                    <div className="socialmedia">
                        <p><img src ="./fb.png" alt=""/></p>
                        <p><img src ="./insta.png" alt=""/></p>
                        <p><img src ="./linkedin.png" alt=""/></p>
                        <p><img src ="./twitter.png" alt=""/></p>
                    </div>
                </div>
            </div>
    <hr></hr>
        <div className="footer-below">
            <div className="footer-copyright">
                <p>
                    @{new Date().getFullYear()} LaunchEd Global. All Rights Reserved.
                </p>
            </div>
            <div className="footer-below-links">
                <a href="./terms"><div><p>Terms & Conditions</p></div></a>
                <a href="./privacy"><div><p>Privacy</p></div></a>
                <a href="./security"><div><p>Security</p></div></a>
                <a href="./cookie"><div><p>Cookie</p></div></a>
            </div>
        </div>
            </div>
        </div>
    )
}

export default Footer;
