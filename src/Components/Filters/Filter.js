import cross from "../../Assets/cross.png";
import greyCrosses from "../../Assets/greyCross.png";
import classes from "./Filter.module.css";
const Filter = ({ name, index, greyCross }) => {
  return (
    <div
      key={index}
      className={`${classes.filterContainer} ${
        greyCross ? "" : classes.active
      }`}
    >
      <span>{name}</span>
      <img src={greyCross ? greyCrosses : cross} alt="cross-icon" />
    </div>
  );
};

export default Filter;
