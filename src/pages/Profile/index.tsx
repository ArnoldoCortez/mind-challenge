import { Box, Container, Typography } from "@mui/material";
import ProfileCard from "./components/ProfileCard";

function ProfilePage() {
  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Typography component="h1" variant="h4">
        Profile
      </Typography>
      <Box sx={{ paddingTop: "12px" }}>
        <ProfileCard />
      </Box>
    </Container>
  );
}

export default ProfilePage;
