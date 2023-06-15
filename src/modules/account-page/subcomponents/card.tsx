import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import LinearProgress from "@mui/material/LinearProgress";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Rating } from "@mui/material";
import { changeCourseRate } from "../../../redux/user-slice";
import { useAppDispatch } from "../../../hooks/redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../const";

interface CourseCardProps {
  id: number;
  image: string;
  courseName: string;
  author: string;
  progress: number;
  rate: number;
}

const CourseCard: FC<CourseCardProps> = ({
  id,
  image,
  courseName,
  author,
  progress,
  rate,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ width: "20rem" }}>
      <Link to={`${ROUTES.course}?courseId=${id}`}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {courseName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography
                variant="body2"
                color="text.secondary"
              >{`${progress}%`}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Link>
      <CardActions>
        Rate course:
        <Rating
          name="simple-controlled"
          value={rate}
          onChange={(event, newValue) =>
            dispatch(changeCourseRate({ id, rate: newValue || 0 }))
          }
        />
      </CardActions>
    </Card>
  );
};

export default CourseCard;
