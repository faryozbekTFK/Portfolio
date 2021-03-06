import { Card } from "react-bootstrap";
import wirtusTricot from "../assets/images/wirtus-tricot.png";
import eCommerceApp from "../assets/images/e-commerce-app.png";
import resume from "../assets/images/resume.png";
import roadsUZB from "../assets/images/roadsUZB.png";
import "../assets/styles/portfolio.css";

function Portfolio() {
  const portfolioData = [
    {
      link: "https://toxtasinov-faryozbek-cv.netlify.app/",
      title: "Resume",
      image: resume,
      github: "https://github.com/faryozbekTFK/Portfolio/tree/Resume",
    },
    {
      link: "https://wirtus-tricot.netlify.app/",
      title: "Wirtus Tricot",
      image: wirtusTricot,
      github: "https://github.com/faryozbekTFK/Portfolio/tree/Wirtus-Tricot",
    },
    {
      link: "https://e-commerce-site-app.netlify.app/",
      title: "E-commerce App",
      image: eCommerceApp,
      github: "https://github.com/faryozbekTFK/Portfolio/tree/E-Commerce-Site",
    },
    {
      link: "https://roads-uzb.netlify.app/",
      title: "Roads UZB",
      image: roadsUZB,
      github: "https://github.com/faryozbekTFK/Portfolio/tree/RoadsUZB",
    },
  ];

  const CardList = ({ link, title, image, github }) => {
    return (
      <a href={link} className="cardLink ">
        <Card className="card ">
          <img src={image} alt={title} />
          <Card.Body className="cardBody">
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <a href={github} className="gitLink">
            <Card.Footer>
              <small className="text-muted ">GitHub</small>
            </Card.Footer>
          </a>
        </Card>
      </a>
    );
  };

  return (
    <div className="portfolio  ">
      <div className="portCont ">
        <h1 className="text-center">MY PORTFOLIOS</h1>
        <div className="cont mt-4">
          {portfolioData.map((portfolio) => {
            return (
              <CardList
                key={portfolio.title}
                link={portfolio.link}
                title={portfolio.title}
                image={portfolio.image}
                github={portfolio.github}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
