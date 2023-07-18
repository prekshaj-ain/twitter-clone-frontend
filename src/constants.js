import React from "react";

export const BASE_URL = "http://localhost:3000";
export const renderHighlightedText = (text) => {
  const hashtagRegex = /#[a-zA-Z0-9_]+/g;
  const parts = text.split(hashtagRegex);
  const matches = text.match(hashtagRegex);
  return parts.map((part, index) => {
    return (
      <React.Fragment key={index}>
        {part}
        {matches && matches[index] && (
          <span className="text-blue-500">{matches[index]}</span>
        )}
      </React.Fragment>
    );
  });
};
