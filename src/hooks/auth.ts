import { ACCESS_TOKEN_KEY } from "@/constants/auth";
import { Storage } from "@/utilities/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const storage = new Storage();

  const isAuthenticated = storage.checkItem(ACCESS_TOKEN_KEY);

  return {
    isAuthenticated,
  };
}

export function useAuthRedirect() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const storage = new Storage();
  const isAuthenticated = storage.checkItem(ACCESS_TOKEN_KEY);

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/login");
      } else {
        setIsLoading(false);
      }
    },
    [isAuthenticated, navigate]
  );
  return isLoading;
}
