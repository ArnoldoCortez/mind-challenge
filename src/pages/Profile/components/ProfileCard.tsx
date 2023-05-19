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

type Props = {
  name?: string;
  email?: string;
  englishLevel?: string;
  technicalKnowledge?: string;
  cvLink?: string;
};

export default function ProfileCard({
  name = "User name",
  email = "",
  englishLevel = "",
  technicalKnowledge = "",
  cvLink = "#",
}: Props) {
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
            {name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {email}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {englishLevel ? `English ${englishLevel}` : ""}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {technicalKnowledge}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        {cvLink ? (
          <Button
            fullWidth
            variant="text"
            component="a"
            target="_blank"
            href={cvLink}
          >
            CV Link
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}
