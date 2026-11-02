import fs from 'fs';
import mongoose from 'mongoose';
import { connectDB } from '../config/database';
import { Cliente } from '../models/Cliente';

const ARCHIVO = process.argv[2] ?? './Tabla.csv';

// separa una línea CSV respetando las comillas
const separarLinea = (linea: string): string[] => {
    const campos: string[] = [];
    let actual = '';
    let entreComillas = false;
    for (let i = 0; i < linea.length; i++) {
        const c = linea[i];
        if (c === '"') {
            if (entreComillas && linea[i + 1] === '"') { actual += '"'; i++; }
            else entreComillas = !entreComillas;
        } else if (c === ',' && !entreComillas) {
            campos.push(actual);
            actual = '';
        } else {
            actual += c;
        }
    }
    campos.push(actual);
    return campos.map((s) => s.trim());
};

const importar = async () => {
    console.log('iniciando importación, archivo:', ARCHIVO);
    await connectDB();

    const existentes = await Cliente.countDocuments();
    if (existentes > 0) {
        console.log(`Ya hay ${existentes} clientes en Mongo, no se importa nada.`);
        return;
    }

    const texto = fs.readFileSync(ARCHIVO, 'utf-8').replace(/^\uFEFF/, '');
    const lineas = texto.split(/\r?\n/).filter((l) => l.trim() !== '');
    const [cabecera, ...filas] = lineas;
    const columnas = separarLinea(cabecera);

    const docs = filas.map((linea) => {
        const valores = separarLinea(linea);
        const fila: Record<string, string> = {};
        columnas.forEach((col, i) => { fila[col] = valores[i] ?? ''; });
        return {
            nombre: fila.nombre,
            telefono: fila.telefono || null,
            correo: fila.correo,
            pago: fila.pago,
            monto: Number(fila.monto)
        };
    });

    await Cliente.insertMany(docs);
    console.log(`Importados ${docs.length} clientes.`);
};

importar()
    .catch((err) => console.error('error al importar:', err))
    .finally(() => mongoose.disconnect());