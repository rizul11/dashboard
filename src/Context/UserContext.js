import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
};

export function useUsers() {
  return useContext(UserContext);
}

// Add a helper function to get user names
export function getUserNames(users) {
  return users.map((user) => user.name);
}

