import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Button, Container, Stack, SvgIcon, Typography } from "@mui/material";

import UsersTable from "./components/UsersTable";
import { useMemo, useState } from "react";
import { applyPagination } from "../../utils/pagination.utils";

const data = [
  {
    id: "5e887ac47eed253091be10cb",
    name: "Carson Darrin",
    email: "carson.darrin@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    name: "Fran Perez",
    email: "fran.perez@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    name: "Jie Yan Song",
    email: "jie.yan.song@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
  {
    id: "5e86809283e28b96d2d38537",
    name: "Anika Visser",
    email: "anika.visser@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
  {
    id: "5e86805e2bafd54f66cc95c3",
    name: "Miron Vitold",
    email: "miron.vitold@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
  {
    id: "5e887a1fbefd7938eea9c981",
    name: "Penjani Inyene",
    email: "penjani.inyene@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
  {
    id: "5e887d0b3d090c1b8f162003",
    name: "Omar Darobe",
    email: "omar.darobe@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
  {
    id: "5e88792be2d4cfb4bf0971d9",
    name: "Siegbert Gottfried",
    email: "siegbert.gottfried@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
  {
    id: "5e8877da9a65442b11551975",
    name: "Iulia Albu",
    email: "iulia.albu@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
  {
    id: "5e8680e60cba5019c5ca6fda",
    name: "Nasimiyu Danai",
    email: "nasimiyu.danai@arkusnexus.com",
    englishLevel: "B1",
    technicalKnowledge: "ReactJs",
    cvLink: "#",
  },
];

const useUsers = (page: number, rowsPerPage: number) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

function UsersPage() {
  const [page, setPage] = useState(0);
  const users = useUsers(page, 10);

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  return (
    <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <Typography component="h1" variant="h4">
            Users
          </Typography>
          <div>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <PlusIcon />
                </SvgIcon>
              }
              variant="contained"
            >
              Add New
            </Button>
          </div>
        </Stack>
        <UsersTable
          count={data.length}
          items={users}
          page={page}
          rowsPerPage={10}
          onPageChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
}

export default UsersPage;
