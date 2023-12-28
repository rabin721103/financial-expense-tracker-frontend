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

export const getTotalIncome = async () => {
  return axiosInstance.get("/incomes/totalIncome");
};
export const getTotalExpense = async () => {
  return axiosInstance.get("/expenses/totalExpense");
};
