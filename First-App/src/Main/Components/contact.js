import { useNavigate } from "react-router-dom";

function Contact() {
  const navigation = useNavigate();
  const onHomeClick = () => {
    navigation("/");
  };

  const onAboutClick = () => {
    navigation("/about");
  };
  return (
    <div className="Home">
      <div class="body">
        <center>
          <u>
            <h1>Contact us</h1>
          </u>
          <i>
            <p>
              <b>Student At: </b>Transflower Learning Pvt. Ltd.
            </p>
          </i>
          <i>
            <p>
              <b>Contact Number: </b>8446756339
            </p>
          </i>
          <i>
            <p>
              <b>Email: </b>bhorsanika0239@gmail.com
            </p>
          </i>

          <button onClick={onHomeClick}>Home</button>
          <button onClick={onAboutClick}>About</button>
        </center>
      </div>
    </div>
  );
}

export default Contact;
