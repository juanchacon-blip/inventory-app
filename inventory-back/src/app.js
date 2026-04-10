import express        from "express";
import productRoutes  from "./infrastructure/routes/productRoutes.js";
import { productController } from "./infrastructure/config/container.js";
import cors from "cors";


const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use("/api", productRoutes(productController));

export default app;