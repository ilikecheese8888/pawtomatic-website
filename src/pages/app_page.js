import '../App.css';
import android_app from '../assets/android_app.jpg';

function AppPage(){
  return(
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0 app-img"
            src={android_app}
            alt="Pawtomatic Pet Door Android App"
          />
        </div>
        <div className="col-lg-5">
          <h1 className="font-weight-light">Welcome to the Pawtomatic Web App</h1>
          <p>
            The picture on the left is the Android app. The web app will not look like this.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppPage;
