import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://dogstodaymagazine.co.uk/wp-content/uploads/2016/05/placeholder-image-707x500.png"
              alt="placeholder"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home Page or Something</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
