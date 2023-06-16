import { FC } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
} from "@mui/material";
import { secondsToHours } from "../../../utils/time";

interface CourseHeaderProps {
  course: {
    id: number;
    courseName: string;
    author: string;
    duration: number;
    progress: number;
    rate: number;
    image: string;
    aims: string[];
    projectDesc: string;
    materials: {
      topic: string;
      date: string;
      desc: string;
      type: "lecture" | "practice";
      passed: boolean;
    }[];
  };
}

const CourseHeader: FC<CourseHeaderProps> = ({ course }) => {
  return (
    <div className="course__info">
      <div className="course__info-description">
        <h3>{course.courseName}</h3>
        <p>{course.projectDesc}</p>
        <div className="course__info-description-aims">
          {course.aims.map((el) => (
            <span>
              <EmojiEventsIcon /> {el}
            </span>
          ))}
        </div>
      </div>
      <div className="course__info-marketing">
        <Card sx={{ width: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#3d5afe" }} aria-label="recipe">
                {course.author.slice(0, 1)}
              </Avatar>
            }
            title={course.author}
            subheader={`Course duration: ${secondsToHours(
              course.duration
            )} hours`}
          />
          <CardMedia
            component="img"
            height="194"
            image={course.image}
            alt="Course image"
          />
          <CardContent>
            <Rating
              name="half-rating-read"
              value={course.rate}
              precision={0.1}
              readOnly
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseHeader;
