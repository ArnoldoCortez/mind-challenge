import { Box, Container, Typography } from "@mui/material";
import ProfileCard from "./components/ProfileCard";
import { useAuth } from "../../hooks/useAuth";

function ProfilePage() {
  const auth = useAuth();
  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Typography component="h1" variant="h4">
        Profile
      </Typography>
      <Box sx={{ paddingTop: "12px" }}>
        <ProfileCard
          name={auth.user?.name}
          email={auth.user?.email}
          englishLevel={auth.user?.englishLevel}
          technicalKnowledge={auth.user?.knowledge}
          cvLink={auth.user?.cvLink}
        />
      </Box>
    </Container>
  );
}

export default ProfilePage;
