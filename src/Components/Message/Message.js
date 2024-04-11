import bag from "../../Assets/bag.png";
import badge from "../../Assets/badge.png";
import arrow from "../../Assets/greyArrow.png";
import classes from "./Message.module.css";
const Message = ({ text, type, time, index }) => {
  return (
    <div className={`${classes.messageContainer} ${classes[type]}`} key={index}>
      <div className={classes.message}>
        {index === 3 ? (
          <div className={classes.info}>
            <img src={bag} alt="bag" />
            <div className={classes.detailContainer}>
              <div>
                <h4>
                  Bags on <span style={{ fontWeight: "600" }}>Timpu</span>
                </h4>
                <img src={badge} alt="badge" />
              </div>
              <div>
                <h5>1123 products</h5>
                <img src={arrow} alt="arrow" className={classes.arrow} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <p>{text}</p>
      </div>
      <span className={classes.time}>{time}</span>
    </div>
  );
};

export default Message;
