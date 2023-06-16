import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../../hooks/redux";
import { addNote } from "../../../redux/courses-slice";

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
}

const Row: FC<
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

const CourseTable: FC<CourseTableProps> = ({
  topics,
  setLoading,
  currentCourse,
}) => {
  return (
    <Table aria-label="collapsible table" className="course__plan-table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Topic</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Type</TableCell>
          <TableCell align="right">Passed</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {topics.map((row) => (
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
        ))}
      </TableBody>
    </Table>
  );
};

export default CourseTable;
