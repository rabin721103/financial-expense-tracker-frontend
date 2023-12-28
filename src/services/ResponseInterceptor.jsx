import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

const ResponseInterceptor = () => {
  const navigate = useNavigate();

  const handleRequest = useCallback(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error?.response?.status === 403) {
          localStorage.removeItem("user");
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);
  return <></>;
};

export default ResponseInterceptor;
