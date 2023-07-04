import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "À propos",
  },

  {
    path: "#",
    display: "Politique de confidentialité",
  },

  {
    path: "/cars",
    display: "Liste de voitures",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                  Youssfi Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              C'est comme Amazon, 
              mais au lieu d'acheter des trucs inutiles 
              que tu n'as pas besoin, tu peux louer des voitures 
              inutiles que tu n'as pas besoin non plus ! En gros, le site 
              te permettra de trouver la voiture qui convient le mieux à tes 
              besoins (même si en réalité toutes les voitures se ressemblent) 
              et de réserver cette voiture pour une durée déterminée moyennant
              finance (et oui ça coûte toujours plus cher que prévu). Mais bon,
              au moins tu auras l'impression d'avoir accompli quelque chose 
              dans ta vie en ayant réservé cette voiture sur ce site.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Liens rapides</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Siège social</h5>
              <p className="office__info">123 Boudir, Oujda, Maroc</p>
              <p className="office__info">Phone: +212 6 03 84 72 83</p>

              <p className="office__info">Email: khalil.jaouani29@gmail.com</p>

              <p className="office__info">Temps de bureau: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Nouvelles offre</h5>
              <p className="section__description">Abonnez-vous pour des nouvelles offre</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                JAOUANI Khalil. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
