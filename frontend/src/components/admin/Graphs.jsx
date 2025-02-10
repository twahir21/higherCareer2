
export const Graphs = () => {
  const styles = {
    main: {
      padding: "20px",
      maxWidth: "900px",
      margin: "20px auto",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    canvas: {
      maxWidth: "100%",
      height: "auto",
      margin: "20px 0",
    },
  };

  return (
    <div>
      <div className="row">
        <div className="main col-md-12" style={styles.main}>
          <canvas id="attendanceFeesChart" style={styles.canvas}></canvas>
        </div>
        {/* Student bar chart */}
        <div className="main col-md-8" style={styles.main}>
          <canvas id="studentBarChart" style={styles.canvas}></canvas>
        </div>
      </div>
    </div>
  );
};
