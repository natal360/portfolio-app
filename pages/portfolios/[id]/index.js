import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";


const Portfolio = ({ portfolio }) => {
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
    <BaseLayout
      user={dataU}
      loading={loadingU}
      navClass="transparent" >
      <BasePage
        noWrapper
        indexPage
        title={`${portfolio.portfolio.title}`}
        metaDescription={portfolio.portfolio.description}>


        <div className="portfolio-detail">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">
              <h1 className="cover-heading md-5">{portfolio.portfolio.title}</h1>
              <p className="lead dates mb-5">
                {portfolio.portfolio.slideUrl &&
                  <iframe className="mt-5" src={portfolio.portfolio.slideUrl} width="940" height="566" allowFullScreen={true}></iframe>
                }</p>
              <p className="lead mb-5">{portfolio.portfolio.description}</p>

              {portfolio.portfolio.webSite &&
                <p className="lead">
                  <a href={portfolio.portfolio.webSite} target="_" className="btn btn-lg btn-secondary">WEBサイトへ移動</a>
                </p>
              }

            </main>
          </div>
        </div>

      </BasePage>
    </BaseLayout>
  )
}


export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  // Get the paths we want pre-render based on portfolio ID
  const paths = portfolios.map(portfolio => {
    return {
      params: { id: portfolio._id }
    }
  })

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio }, revalidate: 1 };
}

export default Portfolio;