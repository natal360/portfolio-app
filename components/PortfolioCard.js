import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';


const PortfolioCard = ({ portfolio, children }) =>

  <Card className="portfolio-card">
    <CardHeader className="portfolio-card-header">{portfolio.headTitle}</CardHeader>
    <CardBody>
      <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
      <CardText className="portfolio-card-text">{portfolio.description}</CardText>
      {children
      }
    </CardBody>
  </Card>


export default PortfolioCard;