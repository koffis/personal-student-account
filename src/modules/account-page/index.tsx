import { FC } from "react";
import Header from "../../components/header";
import { useAppSelector } from "../../hooks/redux";
import Loader from "../../components/loader";
import CourseCard from "./subcomponents/card";
import Achievements from "./subcomponents/achievements";
import Footer from "../../components/footer";
import "./index.scss";

const AccountPage: FC = ({}) => {
  const { loading } = useAppSelector((state) => state.auth);
  const { courses, achievements } = useAppSelector((state) => state.user);

  const coursesList: React.ReactNode[] = courses.map((el) => (
    <CourseCard
      id={el.id}
      image={el.image}
      author={el.author}
      courseName={el.courseName}
      progress={el.progress}
      rate={el.rate}
    />
  ));

  return (
    <>
      {loading && <Loader />}
      <Header />
      <div className="account">
        <div className="account__courses">
          <h3>My courses</h3>
          <div className="account__courses-list">{coursesList}</div>
        </div>
        <Achievements achievements={achievements} />
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;
