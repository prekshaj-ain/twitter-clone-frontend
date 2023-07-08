import React from "react";

const Tweet = ({ post }) => {
  const renderHighlightedText = () => {
    const words = text.split(" ");
    const hashtagRegex = /#[a-zA-Z0-9_]+/g;
    return words.map((word, index) => {
      if (word.test(hashtagRegex)) {
        // Wrap hashtags with highlighting
        return (
          <span key={index} className="text-blue">
            {word}
          </span>
        );
      }

      return <span key={index}>{word}</span>;
    });
  };
  return <div>{post.content}</div>;
};

export default Tweet;
