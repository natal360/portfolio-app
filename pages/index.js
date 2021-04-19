import React, { useEffect, useRef, useState } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from "@/components/BasePage";
import { Container, Row, Col } from 'reactstrap';
import Typed from "react-typed";
import { useGetUser } from "@/actions/user";


// Typed 表示文字
const roles = ["ASP.NET Core", "React.js", "Vue.js", "Angular", "Flutter"]
const Index = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const changeCover = () => setIsFlipping(!isFlipping);
  const { data, loading } = useGetUser();
  // const flipInterval = useRef();

  // useEffect(() => {
  //   startAnimation();
  //   return () => flipInterval.current && clearInterval(flipInterval.current);
  // }, []);


  // const startAnimation = () => {
  //   flipInterval.current = setInterval(() => {
  //     setIsFlipping(prevFlipping => !prevFlipping);
  //   }, 20000);
  // }

  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass="transparent"
      className={`cover ${isFlipping ? "cover-orange" : "cover-blue"}`}>
      <BasePage indexPage title="ポートフォリオ Next.js">
        <div className="main-section">
          <div className="background-image">
            <img className="rotate-img" src="/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>

                    <div className="front">
                      <div
                        onClick={changeCover}
                        className="hero-section-content-image mt-4 ml-1 image image-1"
                      >
                        <div className="hero-section-content text-center">
                          <h2 className="hero-section-content-title"> Full Stack Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio.
                        </div>
                        </div>
                      </div>

                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>

                    </div>


                    <div className="back">

                      <div
                        onClick={changeCover}
                        className="hero-section-content-image mt-4 ml-1 image image-2"
                      >
                        <div className="hero-section-content text-center">
                          <h2 className="hero-section-content-title"> Powered by Next.js </h2>
                          <div className="hero-section-content-intro">
                            Software developer
                    </div>
                        </div>
                      </div>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>

                    </div>

                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website.
                    We will update it from time to time, so please visit regularly. We plan to update mainly on the following technologies
                </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default Index;