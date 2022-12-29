import { faLinkedin,faGithub,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function About() {
  return (<div 
    className="page-container"
    style={{
    width:'500px',
    maxWidth:'100%',
    margin:'0 auto'}}>
    <h2>About</h2>
    <p>AIChef is a platform for discovering new and innovative recipes created using artificial intelligence. AIChef is perfect for professional chefs and home cooks alike to find unique dishes and explore endless culinary possibilities. Come and discover the exciting world of AI-generated recipes!</p>
    <div className='more-details-container'>
        <p>This mini project was developed by Omer Gatenio as part of a journey to become a full-stack developer.</p>
        <p>I'm looking for a Frontend/Fullstack position, <a href="https://www.linkedin.com/posts/omer-gatenio_acraclacsacgabracsacpacpadd-frontend-fullstack-activity-7011254902555348993-Vjsq?utm_source=share&utm_medium=member_desktop">click here</a> for more details.</p>
    </div>
  <ul className='social'>
    <li><Link href={'https://github.com/gateniomer/AIChef'}><FontAwesomeIcon icon={faGithub}/></Link></li>
    <li><Link href={'https://www.linkedin.com/in/omer-gatenio/'}><FontAwesomeIcon icon={faLinkedin}/></Link></li>
    <li><Link href={'https://wa.me/+972544930243'}><FontAwesomeIcon icon={faWhatsapp}/></Link></li>
  </ul>
  </div>)
}