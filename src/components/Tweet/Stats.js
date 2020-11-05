import React, { useContext } from "react";
import { TweetContext } from "../TweetContext";
import styled from "styled-components";

export const Stats = () => {
  const { numOfLikes, numOfRetweets } = useContext(TweetContext);
  return (
    <StyledStats>
      <div>
        <Bold>{numOfRetweets}</Bold> Retweets
      </div>
      <Likes>
        <Bold>{numOfLikes}</Bold> Likes
      </Likes>
    </StyledStats>
  );
};

const StyledStats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  color: gray;
`;
const Bold = styled.span`
  font-weight: bolder;
  color: black;
  margin-right: 3px;
`;

const Likes = styled.div`
  margin-left: 30px;
`;
