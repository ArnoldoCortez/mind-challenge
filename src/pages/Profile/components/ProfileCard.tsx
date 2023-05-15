import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const user = {
  name: "John Doe",
  email: "jdoe@mind.com",
  englishLevel: "B2",
  technicalKnowledge: "ReactJS",
};

export default function ProfileCard() {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              height: 80,
              mb: 2,
              width: 80,
            }}
          />
          <Typography gutterBottom variant="h5">
            {user.name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.email}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            English {user.englishLevel}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.technicalKnowledge}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth variant="text" component="a" target="_blank" href="#">
          CV Link
        </Button>
      </CardActions>
    </Card>
  );
}
