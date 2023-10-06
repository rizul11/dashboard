import React, { createContext, useState } from "react";

const PostDetailsContext = createContext({
  postDetails: null,
});

// Create a provider for the post details context
export const PostDetailsProvider = ({ children }) => {
  const [postDetails, setPostDetails] = useState(null);

  const value = {
    postDetails,
    setPostDetails,
  };

  return (
    <PostDetailsContext.Provider value={value}>
      {children}
    </PostDetailsContext.Provider>
  );
};

// Create a hook to access the post details context
export const usePostDetails = () => {
  const context = React.useContext(PostDetailsContext);

  if (!context) {
    throw new Error("usePostDetails must be used within a PostDetailsProvider");
  }

  return context;
};
