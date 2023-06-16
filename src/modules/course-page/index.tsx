import { FC, useState } from "react";
import Loader from "../../components/loader";
import Header from "../../components/header";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import CourseHeader from "./subcomponents/courseHeader";
import { TextField } from "@mui/material";
import useDebounce from "../../hooks/debounce";
import Footer from "../../components/footer";
import EnhancedTable from "./subcomponents/courseGrid";
import "./index.scss";

const CoursePage: FC = ({}) => {
  const [searchParams] = useSearchParams();
  const currentCourse = searchParams.get("courseId") || 0;
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const course = useAppSelector((state) =>
    state.courses.courses.find((el) => el.id === +currentCourse)
  )!;

  const debouncedFilter = useDebounce(filter, 1000);

  return (
    <>
      {loading && <Loader />}
      <Header />
      <div className="course">
        <CourseHeader course={course} />
        <div className="course__plan">
          <h4>Course plan</h4>
          <TextField
            label="Filter topics"
            variant="outlined"
            className="course__plan-search"
            onChange={(e) => {
              setFilter(e.target.value);
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }}
          />
          <div style={{ minHeight: "18.75rem" }}>
            <EnhancedTable
              topics={course.materials}
              setLoading={setLoading}
              currentCourse={+currentCourse}
              filter={debouncedFilter}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
