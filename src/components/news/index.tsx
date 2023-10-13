import React from "react";
import { NewsItem } from "../../hooks/useHackerNews";
import Item from "./item";
import styled from "@emotion/styled";
type Props = {
  news: NewsItem[];
};
const NewsList = ({ news }: Props) => {
  return (
    <Wrap>
      <h1>News</h1>
      <Grid>
        {news.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Grid>
    </Wrap>
  );
};

export default NewsList;

const Wrap = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 80px;
  @media (max-width: 1250px) {
    padding: 20px 40px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  @media (max-width: 1250px) {
    gap: 40px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
