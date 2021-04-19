import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Col, Row } from "reactstrap";
import { useEffect } from "react";


const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__AboutLoaded = true;
    }
  })

  const createFadeInClass = () => {
    if (typeof window !== "undefined") {
      return window.__isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  }

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="このサイトについて"
        className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass}`}>MY PRODUCTS</h1>
              <h4 className={`subtitle ${createFadeInClass}`}>ポートフォリオサイト</h4>

            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass}`}>
              <p>このサイトは Nuxt.js で作成したポートフォリオサイトです。 </p>
              <p>
                今まで作成した作品や今後制作する作品を
                Googleスライドで纏めた物やWebページなどを表示します。
          </p>
              <br />
              <h5>使用技術</h5>

              <ul>
                <li>フレームワーク：Next.js</li>
                <li>プログラム管理：Git</li>
                <li>ユーザー認証：Auth0</li>
                <li>データベース：MongoDb</li>
                <li>API：Heroku</li>
                <li>WEB：Vercel</li>
              </ul>

              <br />
              <h5>サイトの特徴</h5>
              <ul>
                <li>検索エンジン最適化</li>
                <li>ポートフォリオの操作(オーナーのみ)</li>
              </ul>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;