import { Container } from "reactstrap"
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const PageHeader = ({ header }) =>
  <div className="page-header">
    <h1 className="page-header-title">{header}</h1>
  </div>

const BasePage = props => {
  const router = useRouter();

  const {
    noWrapper,
    indexPage,
    className = "",
    header,
    title = "React Next.jsを使用したポートフォリオ",
    metaDescription = "今まで作成したプログラムの一覧です。",
    canonicalPath,
    children
  } = props;

  const pageType = indexPage ? "index-page" : "base-page";
  const Wrapper = noWrapper ? React.Fragment : Container;
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta mame="viewport" content="initial-scale1.0, width=device-width" />
        <meta name="description" key="description" content={metaDescription} />
        <meta name="title" key="title" content={title} />
        <meta property="og:title" key="og:title" content={title} />
        <meta property="og:locale" key="og:locale" content="ja" />
        <meta property="og:url" key="og:url" content={`${process.env.BASE_URL}${router.asPath}`} />
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:description" key="og:description" content={metaDescription} />
        <meta property="og:image" key="og:image" content={`${process.env.BASE_URL}/images/section-1.png`} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&family=Noto+Serif+JP:wght@300&display=swap" rel="stylesheet" />
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}${canonicalPath ? canonicalPath : router.asPath}`} />
      </Head>
      <div className={`${pageType} ${className}`}>
        <Wrapper>
          {header && <PageHeader header={header} />}
          {children}
        </Wrapper>


      </div>
    </React.Fragment>
  )
}

export default BasePage;
