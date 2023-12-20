import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../components/DataTable";
import { getStarWarsCharacters } from "../../services/starWarsCharater";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["starWarsCharacters"],
    queryFn: () => getStarWarsCharacters(),
  });

  const columns = useMemo(() => {
    return [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "height",
        header: "height",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "gender",
        header: "gender",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "skin_color",
        header: "skin_color",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
    ];
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DataTable columns={columns} data={data?.data?.results ?? []} />
    </div>
  );
};

export default Dashboard;
