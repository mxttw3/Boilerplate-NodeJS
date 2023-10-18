import './loadEnvironment.js';
import express, {type Express, type Request, type Response} from 'express';

// Initialize express
const app: Express = express();
const port = process.env.HOST_PORT ?? '3000';

// eslint-disable-next-line arrow-body-style

app.get('/', (req: Request, res: Response) => {
	const alumnes: any[] = ['Angulo Caballero, Alan Matthew', 'Sanz Sanchez, Oscar', 'Herrerias Cuscullola, Rafel', 'Blay Estrada, Alex', 'Garrido Pintado, Albert', 'Ros Puig, Manuel', 'Trujillo Albert, Pol', 'Najarro García, Marc', 'Soto Gómez, Eugeni', 'Muñoz Valenzuela, Alejandro', 'Higueras Rubiño, Jaime', 'Gàndara Sánchez, Jaume', 'Sánchez Erazo, Luis Mario', 'Argueta Navarrete, Nahomy Fernanda', 'Llamas Masdeu, Dídac', 'Linares Vigo, Joan', 'Simón Pérez, Kevin', 'Condal García, Pol', 'Du Pre Peralta, Gerard', 'Pascual González, Alejandro', 'Trujillo Guadiamos, Victor Manuel', 'Bautista Martin, Brian', 'Pallarés Sirvent, Quim', 'Parra Raya, Óscar', 'Rodellar Martínez, Alberto'];

	const num = 'Hi ha un total de ' + alumnes.length + ' alumnes';
	return res.send({alumnes, num});
});

app.listen(process.env.HOST_PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});

export default app;
