import classes from "./Home.module.css";
import nkwobi from "../assets/Nkwobi-removebg-preview 1.png";
import img from "../assets/download-removebg-preview 1.svg";
import masa from "../assets/Nigerian-Hausa-Masa_9jafoodie-600x398-removebg-preview 1.png";
const Home = () => {
  return (
    <>
      <div className={classes.top}>
        <div className={classes.text}>
          <h2>
            Sapa?
            <br /> Forget that one.
            <br /> Come and eat. Make Belle full for shikini money!
          </h2>
          <h1>Food is Life</h1>
        </div>

        <div className={classes.side}>
          <img src={img} alt="Food" />
        </div>
      </div>
      <article className={classes.container}>
        <h1 className={classes.title}>About us</h1>
        <div className={classes.image}>
          <img src={nkwobi} alt="nkwobi" />
        </div>
        <div className={classes.aside}>
          <h1>
            <span className={classes.bold}>FOODLY</span> is what happen when
            <span className={classes.bold}> homemade foods</span> meets
            <span className={classes.bold}> technology</span>
          </h1>
          <h2>
            Armed with pestle and cooking spoon, we are fighting to bring best
            quality food with the lowest price
          </h2>
        </div>
        <div>
          we use freshest mood and the healthiest methods to create tastiest
          food
        </div>
        <img src={masa} alt="masa" />
      </article>
    </>
  );
};

export default Home;
