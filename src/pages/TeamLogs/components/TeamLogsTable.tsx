import {
  Box,
  Card,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

type TableItems = {
  id: string;
  userName: string;
  accountName: string;
  startDate: string;
  endDate: string;
};

type Props = {
  items: TableItems[];
};

const columnHelper = createColumnHelper<TableItems>();

const columns = [
  columnHelper.accessor("userName", {
    header: "User Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("accountName", {
    header: "Account Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("startDate", {
    header: () => "Start Date",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("endDate", {
    header: "End Date",
    cell: (info) => info.getValue(),
  }),
];

function TeamLogsTable({ items = [] }: Props) {
  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const { pageSize, pageIndex } = table.getState().pagination;

  return (
    <Card>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getCanFilter() ? (
                      <div>
                        <InputBase
                          type="text"
                          value={
                            (header.column.getFilterValue() ?? "") as string
                          }
                          onChange={(e) =>
                            header.column.setFilterValue(e.target.value)
                          }
                          placeholder={`Search...`}
                        />
                      </div>
                    ) : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        count={table.getFilteredRowModel().rows.length}
        onPageChange={(_, page) => {
          table.setPageIndex(page);
        }}
        page={pageIndex}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[10]}
      />
    </Card>
  );
}

export default TeamLogsTable;
