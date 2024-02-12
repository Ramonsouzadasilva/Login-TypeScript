import express from "express";
import { AppDataSource } from "../src/data-source";
import { errorMiddleware } from "./middlewares/error";
import routes from "../src/routes/routes";
import "express-async-errors";
import cors from "cors"; // Importe o módulo cors

AppDataSource.initialize().then(() => {
	const app = express();
	app.use(cors()); // Use o middleware cors aqui
	app.use(express.json());

	app.use(routes);

	app.use(errorMiddleware);
	console.log(process.env.PORT);
	return app.listen(process.env.PORT);
});
