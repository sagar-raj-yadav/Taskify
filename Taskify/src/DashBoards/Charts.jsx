import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

const Charts = ({totalTask,totalTodoTask,totalDoingTask,totalDoneTask,totalLowPriorityTask,totalMediumPriorityTask,totalHighPriorityTask}) => {
  return (
    <div style={styles.container}>
    <div
  style={{
    ...styles.chart1,
    ...styles.datacard,
    backgroundColor: "#000",
    color: "#fff",
    border: "2px solid #4caf50",
    boxShadow: "rgba(0, 255, 170, 0.6) 0px 5px 15px",
    padding: "1.5em",
  }}
>
  <Bar
    data={{
      labels: ["Total Task", "High priority", "Medium priority", "Low priority", "Todo", "Doing", "Done"],
      datasets: [
        {
          label: "Tasks",
          data: [totalTask, totalLowPriorityTask, totalMediumPriorityTask, totalHighPriorityTask, totalTodoTask, totalDoingTask, totalDoneTask],
          backgroundColor: ["#c70d5f", "#ff9800", "#92e2d0", "#4caf50", "#d8d42d", "#1fe052", "#3de6e0"],
          borderColor: ["#c70d5f", "#ff9800", "#92e2d0", "#4caf50", "#d8d42d", "#1fe052", "#3de6e0"],
          borderWidth: 1,
        },
      ],
    }}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#fff", 
          },
        },
        tooltip: {
          bodyColor: "#fff",
          backgroundColor: "#333", 
        },
        datalabels: {
          display: true,
          color: "#fff", 
          font: {
            size: 12,
          },
          anchor: "end", 
          align: "top", 
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#fff", 
          },
          grid: {
            color: "#555", 
          },
        },
        y: {
          ticks: {
            color: "#fff", 
          },
          grid: {
            color: "#555", 
          },
        },
      },
    }}
    plugins={[
      {
        id: "datalabel-plugin",
        afterDatasetDraw(chart) {
          const { ctx } = chart;
          const meta = chart.getDatasetMeta(0);
          meta.data.forEach((bar, index) => {
            const value = chart.data.datasets[0].data[index];
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.font = "bold 12px Arial";
            ctx.fillText(value, bar.x, bar.y - 5); 
          });
        },
      },
    ]}
  />
</div>

     

     {/* chart 2 */}
      {/* <div style={{ ...styles.chart2, ...styles.datacard }}>
        <Doughnut
          data={{
            labels: ["Total Task" ,"Todo", "Doing", "Done"],
            datasets: [
              {
                label: "Tasks status",
                data: [totalTask,totalTodoTask, totalDoingTask, totalDoneTask],
                backgroundColor: ["#c70d5f","#d8d42d", "#1fe052", "#3de6e0"],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>

     {/* chart 3 */}
      {/* <div style={{ ...styles.chart3, ...styles.datacard }}>
        <Line
          data={{
            labels: ["January", "February", "March"],
            datasets: [
              {
                label: "Monthly Performance",
                data: [65, 59, 80],
                borderColor: "#42a5f5",
                backgroundColor: "rgba(66, 165, 245, 0.5)",
                tension: 0.3,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div> */} 


    </div>
  );
};

  
  const styles = {
    container: {
    //   height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      gap: "2vw",
      flexWrap: "wrap",
      marginTop:"6%"
    },
    datacard: {
        backgroundColor: '#f1f2f4',
      borderRadius: "0.5em",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      padding: "1em",
    },
    chart1: {
      width: "92%",
      height: "25rem",
    },
    chart2: {
      width: "50%",
      height: "20rem",
    },
    chart3: {
      width: "40%",
      height: "20rem",
    },
  };
  
  export default Charts;
  
  //npm i react-chartjs-2 chart.js



  
  // Adding PropTypes validation
  Charts.propTypes = {
    totalTask: PropTypes.number.isRequired,
    totalTodoTask: PropTypes.number.isRequired,
    totalDoingTask: PropTypes.number.isRequired,
    totalDoneTask: PropTypes.number.isRequired,
    totalLowPriorityTask: PropTypes.number.isRequired,
    totalMediumPriorityTask: PropTypes.number.isRequired,
    totalHighPriorityTask: PropTypes.number.isRequired,
  };
  

