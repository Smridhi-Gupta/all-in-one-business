"use client";

import { BASE_URL_USER, USER_DETAILS } from "@/API";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loginChecked, setLoginChecked] = useState(false);

  const [error, setError] = useState(null);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        fetchProfile(storedToken);
      }
    }
  }, []);

  const fetchProfile = async (access_token) => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL_USER}${USER_DETAILS}`, {
        headers: { Token: access_token },
      });

      if (res.status === 200) {
        setProfile(res.data.data);
      } else {
        setError("Failed to load profile.");
      }
    } catch (err) {
      setError("Error fetching profile.");
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        loginChecked,
        setLoginChecked,
        error,
        profile,
        fetchProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
