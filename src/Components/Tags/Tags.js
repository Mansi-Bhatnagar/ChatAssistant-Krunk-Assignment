import classes from "./Tags.module.css";

const Tags = ({ name, index }) => {
  return (
    <div className={classes.tagContainer} key={index}>
      <span>{name}</span>
    </div>
  );
};

export default Tags;
