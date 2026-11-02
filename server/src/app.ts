import express, { Request, Response} from 'express';
import cors from 'cors'
import { errorHandler } from './middleware/errorHandler';
import { clientesRouter } from './routes/clientes';

export const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/*interface Tabla extends RowDataPacket {
    id: number;
    nombre: string;
    telefono: string | null;
    correo: string;
    pago: string;
    monto: number;
}*/

app.get('/', (req: Request, res: Response) => {
    
    res.send("hola mundo");

});


app.get('/despedida', (req: Request, res: Response) => {

    res.send("adios");

});

app.get('/saludo/:nombre', (req: Request, res: Response) => {
    const persona = req.params.nombre
    res.send(`bienvenido ${persona}`);

});


app.use('/datos', clientesRouter);


/*
app.get('/datos', async (req: Request, res: Response) => {
   
    const [rows] = await pool.query<Tabla[]>(
        "SELECT * FROM Tabla"
    )
    res.json({success: true, data: rows})
});
*/

app.use((req: Request, resw: Response) => {
    resw.status(404).json({ success: false, error: "ruta no encontrada"})
})

app.use(errorHandler)