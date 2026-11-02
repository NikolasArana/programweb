import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import { isValidObjectId } from 'mongoose';
import { Cliente } from '../models/Cliente';

class HttpError extends Error {
    constructor(public statusCode: number, message: string) {
        super(message);
    }
}

// Express 4 no captura los errores de funciones async; este wrapper los manda al errorHandler
const asyncHandler =
    (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>): RequestHandler =>
    (req, res, next) => {
        fn(req, res, next).catch(next);
    };

const leerId = (req: Request): string => {
    const id = String(req.params.id);
    if (!isValidObjectId(id)) throw new HttpError(400, 'id invalido');
    return id;
};

const validarCuerpo = (body: any) => {
    const nombre = String(body?.nombre ?? '').trim();
    const correo = String(body?.correo ?? '').trim();
    const pago = String(body?.pago ?? '').trim();
    const telefono = String(body?.telefono ?? '').trim() || null;
    const monto = Number(body?.monto);

    if (!nombre) throw new HttpError(400, 'el nombre es obligatorio');
    if (!/^\S+@\S+\.\S+$/.test(correo)) throw new HttpError(400, 'el correo no es valido');
    if (!pago) throw new HttpError(400, 'el pago es obligatorio');
    if (!Number.isFinite(monto) || monto < 0) throw new HttpError(400, 'el monto debe ser un numero mayor o igual a 0');

    return { nombre, telefono, correo, pago, monto };
};

export const clientesRouter = Router();

// READ - todos
clientesRouter.get('/', asyncHandler(async (_req, res) => {
    const clientes = await Cliente.find().sort({ createdAt: 1 });
    res.json({ success: true, data: clientes });
}));

// READ - uno
clientesRouter.get('/:id', asyncHandler(async (req, res) => {
    const cliente = await Cliente.findById(leerId(req));
    if (!cliente) throw new HttpError(404, 'cliente no encontrado');
    res.json({ success: true, data: cliente });
}));

// CREATE
clientesRouter.post('/', asyncHandler(async (req, res) => {
    const datos = validarCuerpo(req.body);
    const creado = await Cliente.create(datos);
    res.status(201).json({ success: true, data: creado });
}));

// UPDATE
clientesRouter.put('/:id', asyncHandler(async (req, res) => {
    const id = leerId(req);
    const datos = validarCuerpo(req.body);
    const actualizado = await Cliente.findByIdAndUpdate(id, datos, { new: true, runValidators: true });
    if (!actualizado) throw new HttpError(404, 'cliente no encontrado');
    res.json({ success: true, data: actualizado });
}));

// DELETE
clientesRouter.delete('/:id', asyncHandler(async (req, res) => {
    const id = leerId(req);
    const eliminado = await Cliente.findByIdAndDelete(id);
    if (!eliminado) throw new HttpError(404, 'cliente no encontrado');
    res.json({ success: true, data: { id } });
}));