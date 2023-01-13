import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
  return (
    <div>
			<Carousel className="carrousel">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carrousel-img"
          src="images/carrousel1.jpeg"
          alt="Foto 1"
        />
        <Carousel.Caption>
          <h3 className="carrousel-text">Foto 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carrousel-img"
          src="images/carrousel2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="carrousel-text">Foto 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src="images/carrousel3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="carrousel-text">Foto 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		<div className="margin-top">
			<h1 className="title left">WATERSLIDES</h1>
		</div>
    </div>
  );
}

export default HomePage;
