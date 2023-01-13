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
          <p className="carrousel-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <p className="carrousel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <p className="carrousel-text">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		<div className="margin-top container1">
			<h1 className="title">WATERSLIDES</h1>
			<h2 className="subtitle">Mas innovadores y seguros.</h2>
			<p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ipsum porro laudantium animi repellat dolorum corporis nulla blanditiis, delectus quos quasi, nesciunt distinctio totam nostrum nisi consequatur quod fugit eveniet?</p>
			<p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi perspiciatis exercitationem nisi ipsam atque illum, sunt harum consequatur assumenda ex dolores unde laborum deserunt consectetur dicta porro minima rerum.</p>
		</div>
		<div className="container1">
			<h1 className="title1">Proyectos</h1>
		</div>
    </div>
  );
}

export default HomePage;
