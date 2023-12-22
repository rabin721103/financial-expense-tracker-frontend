import axiosInstance from "../../axiosInstance";

export const getStarWarsCharacters = async (params) => {
  const searchParams = new URLSearchParams(params);
  return axiosInstance.get(`/people?${searchParams.toString()}`);
};

export const getStarWarsCharacterById = async (id) => {
  return axiosInstance.get(`/people/${id}`);
};

export const addStarWarsCharacter = async (data) => {
  return axiosInstance.post(`/people`, data);
};
