import { useQuery } from "@tanstack/react-query";
import { getTotalExpense, getTotalIncome } from "../services/starWarsCharater";

export const Balance = () => {
  const { data: income } = useQuery({
    queryKey: ["getTotalIncome"],
    queryFn: () => getTotalIncome(),
  });

  const { data: expense } = useQuery({
    queryKey: ["getTotalExpense"],
    queryFn: () => getTotalExpense(),
  });

  const incomeData = income?.data?.response;

  const expenseData = expense?.data?.response;

  const availableBalance = incomeData - expenseData;

  return availableBalance;
};
