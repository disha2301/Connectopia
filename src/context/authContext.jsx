import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Disha Yadav",
      profilePic:
        "https://media.licdn.com/dms/image/C4D03AQEvnmlTNQG2Fw/profile-displayphoto-shrink_400_400/0/1655374609183?e=1700697600&v=beta&t=srsZ3BL4siMUsZHYCtqIl9cQgqDSDwwTeqW0i-omW7w",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};