import React, { useState } from "react";
import { NewsItem } from "../../hooks/useHackerNews";
import styled from "@emotion/styled";
import CommentForm from "../commentForm";
import { Button } from "../ui";

type Props = {
  item: NewsItem;
};
const Item = ({ item }: Props) => {
  const [isForm, setIsForm] = useState<boolean>(false);
  const { by, title, type, id } = item;
  return (
    <Wrap>
      <Img src="/icons/test.jpeg" alt="" />
      <Container>
        {!isForm ? (
          <>
            <TextWrap>
              <h3>{by}</h3>
              <p>{title}</p>
              <span>{type}</span>
            </TextWrap>
            <Button onClick={() => setIsForm(!isForm)}>Add comment</Button>{" "}
          </>
        ) : (
          <CommentForm by={by} parent={id} onClose={() => setIsForm(!isForm)} />
        )}
      </Container>
    </Wrap>
  );
};

export default Item;

const Wrap = styled.div`
  background: transparent;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: white;
  }
`;
const Img = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
`;

const Container = styled.div`
  padding: 0 20px;
`;

const TextWrap = styled.div`
  h3 {
    color: #6fbae0;
  }
  p {
    color: #7c7d82;
    font-size: 14px;
  }
  span {
    text-transform: uppercase;
    background: #b1b2b6;
    color: white;
    padding: 5px 7px;
  }
`;
