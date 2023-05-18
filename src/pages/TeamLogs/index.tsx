import { Container, Stack, Typography } from "@mui/material";

import TeamLogsTable from "./components/TeamLogsTable";
import { useGetTeamMovementsQuery } from "../../services/api.service";
import { formatISO } from "../../utils/date.utils";

function TeamLogsPage() {
  const { data: teamLogsData, isLoading: isTeamLogsLoading } =
    useGetTeamMovementsQuery();

  if (isTeamLogsLoading) {
    return <h1>Loading...</h1>;
  }

  const teamLogsTableData = teamLogsData
    ? teamLogsData.data.map((log) => ({
        id: log.id,
        userName: log.user.name,
        accountName: log.account.name,
        startDate: formatISO({ date: log.createdAt }),
        endDate: formatISO({ date: log.deletedAt }),
      }))
    : [];

  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Typography component="h1" variant="h4">
          Team Logs
        </Typography>
        <TeamLogsTable items={teamLogsTableData} />
      </Stack>
    </Container>
  );
}

export default TeamLogsPage;
