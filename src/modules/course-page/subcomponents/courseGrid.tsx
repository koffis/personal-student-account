import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import { Button, Collapse, IconButton, TextField } from "@mui/material";
import { addNote } from "../../../redux/courses-slice";
import { FC, useMemo, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface CourseParams {
  topic: string;
  date: string;
  desc: string;
  type: "lecture" | "practice";
  passed: boolean;
  notes: string[];
}

interface CourseTableProps {
  setLoading: (param: boolean) => void;
  currentCourse: number;
  topics: CourseParams[];
  filter: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof CourseParams;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "topic",
    numeric: false,
    disablePadding: true,
    label: "Topic",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
];

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof CourseParams
  ) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof CourseParams) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right">Type</TableCell>
        <TableCell align="right">Passed</TableCell>
      </TableRow>
    </TableHead>
  );
}

const Row: React.FC<
  CourseParams & { setLoading: (param: boolean) => void; currentCourse: number }
> = ({ topic, date, desc, type, passed, notes, setLoading, currentCourse }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAddNote = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addNote({ id: currentCourse, note, topic }));
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {topic}
        </TableCell>
        <TableCell align="right">{date}</TableCell>
        <TableCell align="right">{type}</TableCell>
        <TableCell align="right">{passed ? "passed" : "upcoming"}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }} className="course__plan-table-collapse">
              <h3>Description</h3>
              <p>{desc}</p>
              <h3>Notes</h3>
              <ul>
                {notes.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
              <TextField
                onChange={(e) => setNote(e.target.value)}
                value={note}
                label="Enter your note..."
                multiline
                size="small"
              />{" "}
              <Button onClick={handleAddNote} variant="contained">
                Add note
              </Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const EnhancedTable: FC<CourseTableProps> = ({
  topics,
  setLoading,
  currentCourse,
  filter,
}) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof CourseParams>("date");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof CourseParams
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const visibleRows = useMemo(
    () => stableSort(topics, getComparator(order, orderBy)),
    [order, orderBy]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {visibleRows
              .map(
                (row) =>
                  row.topic.toLowerCase().includes(filter.toLowerCase()) && (
                    <Row
                      setLoading={setLoading}
                      currentCourse={currentCourse}
                      key={row.topic}
                      topic={row.topic}
                      date={row.date}
                      desc={row.desc}
                      type={row.type}
                      passed={row.passed}
                      notes={row.notes}
                    />
                  )
              )
              .filter((el) => el != null)}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EnhancedTable;
