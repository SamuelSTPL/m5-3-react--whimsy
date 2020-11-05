import React, { createContext, useState } from "react";
import Tweet from "./Tweet";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = createContext(null);

export const TweetProvider = ({ Children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setRetweeted] = useState(false);

  const date = moment().format("h:mm a - MMM Do YYYY");

  const handleToggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setNumOfLikes(numOfLikes - 1);
    }
    if (!isLiked) {
      setIsLiked(true);
      setNumOfLikes(numOfLikes + 1);
    }
  };
  const handleToggleRetweets = () => {
    if (isRetweeted) {
      setRetweeted(false);
      setNumOfRetweets(numOfRetweets - 1);
    }
    if (!isRetweeted) {
      setRetweeted(true);
      setNumOfRetweets(numOfRetweets + 1);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date: date,
        numOfLikes: numOfLikes,
        numOfRetweets: numOfRetweets,
        handleToggleLike,
        handleToggleRetweets,
      }}
    >
      <Tweet />
    </TweetContext.Provider>
  );
};
