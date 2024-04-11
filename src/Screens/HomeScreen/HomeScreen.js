import Message from "../../Components/Message/Message";
import Tags from "../../Components/Tags/Tags";
import Filter from "../../Components/Filters/Filter";
import logo from "../../Assets/logo.png";
import badge from "../../Assets/badge.png";
import arrow from "../../Assets/arrow.png";
import filter from "../../Assets/filter.png";
import attach from "../../Assets/attach.png";
import whiteArrow from "../../Assets/whiteArrow.png";
import footerLogo from "../../Assets/footerLogo.png";
import classes from "./HomeScreen.module.css";

const messages = [
  {
    text: "Hi Sam! I am your personal shopping assistant , how can i help you today ?",
    time: "4:45 PM",
    type: "incoming",
    index: 1,
  },
  {
    text: "I am looking for a hand bag, with long strap .",
    time: "4:46 PM",
    type: "outgoing",
    index: 2,
  },
];

const tags = [
  { name: "Clutch", index: 1 },
  { name: "Fabric lining", index: 2 },
  { name: "Baggit", index: 3 },
  { name: "Multiple", index: 4 },
  { name: "Lorem", index: 5 },
];

const messageWithImage = [
  {
    text: "Or set filter and help us choose the best bag for you.",
    time: "4:48 PM",
    type: "incoming",
    index: 3,
  },
];

const filters = [
  { name: "Stop - Long", index: 1, greyCross: false },
  { name: "Colour", index: 2, greyCross: true },
  { name: "Size", index: 3, greyCross: true },
  { name: "Brand", index: 4, greyCross: true },
  { name: "Material", index: 5, greyCross: true },
];

const slideHandler = () => {};
const HomeScreen = () => {
  return (
    <div className={classes.container}>
      <div className={classes.conversationContainer}>
        <div className={classes.nav}>
          <div className={classes.sec1}>
            <img src={logo} alt="bot-logo" />
            <div className={`${classes.ellipse} ${classes.bot}`}></div>
            <div className={classes.nameContainer}>
              <div>
                <h3>Timpu</h3>
                <img src={badge} alt="verified-badge" />
              </div>
              <h4>Chat Assistant</h4>
            </div>
          </div>
          <div className={classes.sec2}>
            <div className={`${classes.ellipse} ${classes.online}`}></div>
            <h4>Online</h4>
          </div>
        </div>
        <div>
          {messages.map((msg) => {
            return (
              <Message
                text={msg.text}
                type={msg.type}
                time={msg.time}
                index={msg.index}
              />
            );
          })}
        </div>
        <div className={classes.tags}>
          <h4>Popular tags for handbag</h4>
          <div className={classes.tagRowWrapper}>
            <div className={classes.tagContainer}>
              {tags.map((tag) => (
                <Tags name={tag.name} index={tag.index} />
              ))}
            </div>
            <img src={arrow} alt="arrow" onClick={slideHandler} />
          </div>
        </div>
        <div className={classes.messageWithImage}>
          {messageWithImage.map((msg) => {
            return (
              <Message
                text={msg.text}
                type={msg.type}
                time={msg.time}
                index={msg.index}
              />
            );
          })}
        </div>
        <div className={classes.filterContainer}>
          <div className={classes.filterHeader}>
            <h4>Select filters</h4>
            <div>
              <img src={filter} alt="filter-icon" />
              <span>Filter</span>
            </div>
          </div>
          <div className={classes.filterRowWrapper}>
            {filters.map((item) => (
              <Filter
                name={item.name}
                index={item.index}
                greyCross={item.greyCross}
              />
            ))}
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.footerRowWrapper}>
            <div className={classes.inputContainer}>
              <input type="text" placeholder="Type your message" />
              <img src={attach} alt="attach-icon" />
            </div>
            <button>
              <img src={whiteArrow} alt="arrow" />
            </button>
          </div>
          <div className={classes.copyRight}>
            <span>Powered by </span>
            <span>Krunk.ai</span>
            <img src={footerLogo} alt="logo" className={classes.footerLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
