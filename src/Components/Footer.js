import twitter from '../assets/img/Twitter Icon.png'
import facebook from '../assets/img/Facebook-Icon.png'
import instagram from '../assets/img/Instagram Icon.png'
import github from '../assets/img/GitHub Icon.png'
export default function Footer() {
  return(
  <div className="footer-container">
    <img src={twitter} alt="" className="footer-logo" />
    <img src={facebook} alt="" className="footer-logo" />
    <img src={instagram} alt="" className="footer-logo" />
    <img src={github} alt="" className="footer-logo" />
  </div>
);
}
