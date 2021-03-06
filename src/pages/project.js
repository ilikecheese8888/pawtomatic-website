import '../App.css';
import {Container, Tabs, Tab} from "react-bootstrap";
// import logo from '../assets/pawtomatic_icon_transparent.png';
import prototype from '../assets/prototype.jpg';

function Project(){
  return(
    <Container>
      <Tabs defaultActiveKey='main' >
        <Tab eventKey='main' title='Main'>
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={prototype}
                alt="Prototype Pawtomatic Pet Door"
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">Welcome to the Project Info Page!</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Project;
