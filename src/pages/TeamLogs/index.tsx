import { useState } from "react";
import { Container, Stack, Typography } from "@mui/material";

import TeamLogsTable from "./components/TeamLogsTable";
import { applyPagination } from "../../utils/pagination.utils";
import {
  useGetAccountsQuery,
  useGetTeamMovementsQuery,
  useGetUsersQuery,
} from "../../services/api.service";
import { User } from "../../services/api.types";

const data = [
  {
    id: "asdasdf",
    userName: "asdfasdf",
    accountName: "asdfasdf",
    startDate: "asdfasdf",
    endDate: "asdfasdf",
  },
];

function TeamLogsPage() {
  const [page, setPage] = useState(0);
  const { data: teamLogsData, isLoading: isTeamLogsLoading } =
    useGetTeamMovementsQuery();
  const { data: accountsData, isLoading: isAccountsLoading } =
    useGetAccountsQuery();
  const { data: usersData, isLoading: isUsersLoading } = useGetUsersQuery();

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  if (isTeamLogsLoading && isAccountsLoading && isUsersLoading) {
    return <h1>Loading...</h1>;
  }

  const usersMap: Record<string, User> = {};

  if (usersData) {
    for (let i = 0; i < usersData.length; i++) {
      usersMap[usersData[i].id] = usersData[i];
    }
  }

  const teamLogsTableData = teamLogsData
    ? teamLogsData.map((log) => ({
        id: log.id,
        userName: log.userId,
        accountName: log.accountId,
        startDate: log.createdAt,
        endDate: log.deletedAt,
      }))
    : [];
  const teamLogsPaginated = applyPagination(teamLogsTableData, page, 10);

  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Typography component="h1" variant="h4">
          Team Logs
        </Typography>
        <TeamLogsTable
          count={teamLogsTableData.length}
          items={teamLogsPaginated}
          page={page}
          rowsPerPage={10}
          onPageChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
}

export default TeamLogsPage;
