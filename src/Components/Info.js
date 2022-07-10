export default function Info() {
  return (
    <div className="info-container">
      <div className="profile-photo"></div>
      <h1>Ali Pashaamiri</h1>
      <p>Front end developer</p>
      <a href="https://pashaamiriali.info">pashaamiriali.info</a>
      <div className="contact-buttons-row">
        <input type="button" className="email-button" value="Email"/>
        <input type="button" className="linkedin-button" value="Linkedin"/>
      </div>
    </div>
  );
}
