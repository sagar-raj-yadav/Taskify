
import express from 'express';

const app = express()
const port = 3000 || process.env.PORT
import TaskRoutes from "./routes/TaskRoutes.js";

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api",TaskRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})