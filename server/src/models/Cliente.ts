import { Schema, model } from 'mongoose';

const clienteSchema = new Schema(
    {
        nombre: { type: String, required: true, trim: true },
        telefono: { type: String, default: null, trim: true },
        correo: { type: String, required: true, trim: true },
        pago: { type: String, required: true, trim: true },
        monto: { type: Number, required: true, min: 0 }
    },
    {
        timestamps: true,
        toJSON: {
            versionKey: false,
            transform: (_doc, ret: any) => {
                ret.id = ret._id.toString();
                delete ret._id;
                delete ret.createdAt;
                delete ret.updatedAt;
                return ret;
            }
        }
    }
);

export const Cliente = model('Cliente', clienteSchema, 'Tabla');