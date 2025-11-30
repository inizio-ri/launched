import "./Featured.css";

export default function Featured() {
  return (
    <div className="mosaic-wrapper">

      {/* LEFT COLUMN */}
      <div className="col left-col">
        <div className="card medium">
          <img src="/featured1.png" alt="Featured1" />
        </div>

        <div className="card medium">
          <img src="/featured2.jpg" alt="Featured2" />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="col right-col">
        <div className="card medium">
          <img src="/featured3.png" alt="Featured3" />
        </div>

        <div className="card medium">
          <img src="/featured4.jpg" alt="Featured4" />
        </div>
      </div>

    </div>
  );
}
