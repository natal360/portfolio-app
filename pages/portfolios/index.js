import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Row, Col, Button } from 'reactstrap';
import { useRouter } from "next/router";
import { useGetUser } from "@/actions/user";
import { useDeletePortfolio } from "@/actions/portfolios";
import PortfolioApi from "@/lib/api/portfolios";
import PortfolioCard from "@/components/PortfolioCard";
import React, { useState } from "react";
import { isAuthorized } from "@/utils/auth0";




const Portfolios = ({ portfolios: initialPortfolios }) => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const [deletePortfolio, { data, error }] = useDeletePortfolio();
  const { data: dataU, loading: loadingU } = useGetUser();

  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm("削除しますか？");
    if (isConfirm) {
      await deletePortfolio(portfolioId);
      setPortfolios(portfolios.filter(p => p._id !== portfolioId));
    }
  }

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage
        title="ポートフォリオ一覧"
        header="Portfolios"
        className="portfolio-page">
        <Row>
          {portfolios.map(portfolio =>
            <Col
              key={portfolio._id}
              onClick={() => {
                router.push("/portfolios/[id]", `/portfolios/${portfolio._id}`)
              }}
              md="4">
              <PortfolioCard
                portfolio={portfolio}>
                {dataU && isAuthorized(dataU, "admin") &&
                  <React.Fragment>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/portfolios/[id]/edit", `/portfolios/${portfolio._id}/edit`)
                      }}
                      className="mr-2" color="warning">編集</Button>
                    <Button
                      onClick={(e) => _deletePortfolio(e, portfolio._id)}
                      color="danger">削除</Button>
                  </React.Fragment>
                }
              </PortfolioCard>
            </Col>
          )
          }
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios },
    revalidate: 1
  }
}

export default Portfolios;