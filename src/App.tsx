import React from "react";
import useHackerNews from "./hooks/useHackerNews";
import "./index.css";
import Header from "./components/header";
import styled from "@emotion/styled";
import Footer from "./components/footer";
import NewsList from "./components/news";

const App = () => {
  const { news, loading } = useHackerNews();

  return (
    <Wrap>
      <Header />
      {loading && <h2>data loading..</h2>}
      {!loading && news && <NewsList news={news} />}
      <Footer />
    </Wrap>
  );
};

export default App;
const Wrap = styled.div``;
