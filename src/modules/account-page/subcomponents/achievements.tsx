import { FC } from "react";
import { Rating, Tooltip } from "@mui/material";
import { secondsToHours } from "../../../utils/time";

const Achievements: FC<{
  achievements: {
    endedCourses: number;
    timeSpended: number;
    yearsOnPlatform: number;
    codeWarsRating: number;
    medals: { image: string; desc: string }[];
  };
}> = ({ achievements }) => {
  const { endedCourses, timeSpended, yearsOnPlatform, codeWarsRating, medals } =
    achievements;

  return (
    <div className="account__achievements">
      <h3>Achievements</h3>
      <div className="account__achievements-list">
        <span className="account__achievements-list-item">
          <b>Finished courses: </b> {endedCourses}
        </span>
        <span className="account__achievements-list-item">
          <b>Time spended: </b>
          {secondsToHours(timeSpended)}h
        </span>
        <span className="account__achievements-list-item">
          <b>Days on platform: </b>
          {secondsToHours(yearsOnPlatform) / 24}
        </span>
        <span className="account__achievements-list-item">
          <b>Rating: </b>
          <Rating
            name="half-rating-read"
            value={codeWarsRating}
            precision={0.1}
            readOnly
          />
        </span>
        <span className="account__achievements-list-item">
          {medals.map((el) => (
            <Tooltip title={el.desc}>
              <img src={el.image} alt={el.desc} />
            </Tooltip>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Achievements;
