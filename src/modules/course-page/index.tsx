import { FC, useState } from "react";
import Loader from "../../components/loader";
import Header from "../../components/header";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import CourseHeader from "./subcomponents/courseHeader";
import "./index.scss";
import CollapsibleTable from "./subcomponents/courseTable";

const CoursePage: FC = ({}) => {
  const [searchParams] = useSearchParams();
  const currentCourse = searchParams.get("courseId") || 0;
  const [loading, setLoading] = useState<boolean>(false);

  const course = useAppSelector((state) =>
    state.courses.courses.find((el) => el.id === +currentCourse)
  )!;

  return (
    <>
      {loading && <Loader />}
      <Header />
      <div className="course">
        <CourseHeader course={course} />
        <div className="course__plan">
          <h4>Course plan</h4>
          <CollapsibleTable
            topics={course.materials}
            setLoading={setLoading}
            currentCourse={+currentCourse}
          />
        </div>
      </div>
    </>
  );
};

export default CoursePage;
