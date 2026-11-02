import { app } from './app';
import { connectDB } from './config/database';
import { config } from './config/env';

const PORT: number = config.port;

const startServer = async () => {
    try {
        await connectDB();
        console.log("conectado exitosamente a MongoDB");

        app.listen(PORT, '::', () => {
            console.log(`Servidor ejecutándose en el puerto: ${PORT}`);
        });
    } catch (error) {
        console.error("error critico al arrancar la app", error);
        process.exit(1);
    }
};

startServer();