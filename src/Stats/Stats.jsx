import CountUp from "react-countup";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="Hero-wrapper">
      <div className="flexCenter stats">

        {/* 1 */}
        <div
          className="flexColCenter stat"
        >
          <CountUp start={0} end={20} duration={3}>
            {({ countUpRef, start, reset }) => (
              <span
                onMouseEnter={() => {
                  reset();
                  start();
                }}
              >
                <span ref={countUpRef} />K+
              </span>
            )}
          </CountUp>
          <span className="secondaryText">Students Assisted</span>
        </div>

        {/* 2 */}
        <div className="flexColCenter stat">
          <CountUp start={0} end={30} duration={3}>
            {({ countUpRef, start, reset }) => (
              <span
                onMouseEnter={() => {
                  reset();
                  start();
                }}
              >
                <span ref={countUpRef} />+
              </span>
            )}
          </CountUp>
          <span className="secondaryText">Years of combined experience</span>
        </div>

        {/* 3 */}
        <div className="flexColCenter stat">
          <CountUp start={0} end={100} duration={3}>
            {({ countUpRef, start, reset }) => (
              <span
                onMouseEnter={() => {
                  reset();
                  start();
                }}
              >
                <span ref={countUpRef} />+
              </span>
            )}
          </CountUp>
          <span className="secondaryText">Industry Experts</span>
        </div>

        {/* 4 */}
        <div className="flexColCenter stat">
          <CountUp start={0} end={500} duration={3}>
            {({ countUpRef, start, reset }) => (
              <span
                onMouseEnter={() => {
                  reset();
                  start();
                }}
              >
                <span ref={countUpRef} />+
              </span>
            )}
          </CountUp>
          <span className="secondaryText">Universities</span>
        </div>

      </div>
    </section>
  );
};

export default Stats;
