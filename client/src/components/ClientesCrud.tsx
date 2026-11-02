import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Heading from "./Headings";
import {
    actualizarCliente,
    crearCliente,
    eliminarCliente,
    listarClientes,
    type ClienteForm,
    type datosCliente,
} from "../api/clientes";

const VACIO: ClienteForm = { nombre: "", correo: "", telefono: "", pago: "", monto: 0 };
const KEY = ["Tabla"];

interface Props {
    titulo?: string;
}

export const ClientesCrud = ({ titulo = "CLIENTES" }: Props) => {
    const queryClient = useQueryClient();

    
    const [editando, setEditando] = useState<datosCliente | "nuevo" | null>(null);
    const [form, setForm] = useState<ClienteForm>(VACIO);
    const [porEliminar, setPorEliminar] = useState<datosCliente | null>(null);

    const { data = [], isPending, isError, error, refetch } = useQuery({
        queryKey: KEY,
        queryFn: listarClientes,
    });

    const cerrarModal = () => setEditando(null);
    const refrescar = () => queryClient.invalidateQueries({ queryKey: KEY });

    const guardar = useMutation({
        mutationFn: (datos: ClienteForm) =>
            editando && editando !== "nuevo"
                ? actualizarCliente(editando.id, datos)
                : crearCliente(datos),
        onSuccess: () => {
            refrescar();
            cerrarModal();
        },
    });

    const borrar = useMutation({
        mutationFn: (id: string) => eliminarCliente(id),
        onSuccess: () => {
            refrescar();
            setPorEliminar(null);
        },
    });

    const abrirNuevo = () => {
        guardar.reset();
        setForm(VACIO);
        setEditando("nuevo");
    };

    const abrirEditar = (c: datosCliente) => {
        guardar.reset();
        setForm({ nombre: c.nombre, correo: c.correo, telefono: c.telefono ?? "", pago: c.pago, monto: c.monto });
        setEditando(c);
    };

    const abrirEliminar = (c: datosCliente) => {
        borrar.reset();
        setPorEliminar(c);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        guardar.mutate(form);
    };

    const campo = "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm";
    const label = "block text-sm font-semibold mb-1";

    return (
        <section className="py-10 bg-[rgba(240,235,229,1)]">
            <div className="max-w-7xl mx-auto px-3">
                <div className="flex items-center justify-between pb-10">
                    <Heading level={2} className="text-muted font-normal">{titulo}</Heading>
                    <button
                        onClick={abrirNuevo}
                        className="bg-amber-900 px-6 py-2.5 font-bold text-white hover:bg-amber-800"
                    >
                        + NUEVO
                    </button>
                </div>

                {isPending ? (
                    <p>Cargando...</p>
                ) : isError ? (
                    <div className="rounded-2xl bg-red-50 p-5 text-red-700">
                        <p className="font-semibold">ocurrio un error</p>
                        <p>{error.message}</p>
                        <button
                            onClick={() => refetch()}
                            className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm text-white"
                        >
                            reintentar
                        </button>
                    </div>
                ) : (
                    <table className="w-full bg-[rgba(240,235,229,1)] rounded-2xl text-left shadow-sm overflow-hidden">
                        <thead className="bg-muted text-[rgba(240,235,229,1)]">
                            <tr>
                                {["Codigo", "Nombre", "Correo", "Telefono", "Pago", "Monto", "Acciones"].map((h) => (
                                    <th key={h} className="px-5 py-4 text-xs font-bold uppercase">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {data.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-5 py-6 text-center">No hay registros</td>
                                </tr>
                            )}
                            {data.map((c) => (
                                <tr key={c.id} className="hover:bg-amber-50 transition-colors">
                                    <td className="px-5 py-4 font-semibold">{c.id.slice(-6)}</td>
                                    <td className="px-5 py-4 font-semibold">{c.nombre}</td>
                                    <td className="px-5 py-4 font-semibold">{c.correo}</td>
                                    <td className="px-5 py-4 font-semibold">{c.telefono}</td>
                                    <td className="px-5 py-4 font-semibold">{c.pago}</td>
                                    <td className="px-5 py-4 font-semibold">{c.monto}</td>
                                    <td className="px-5 py-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => abrirEditar(c)}
                                                className="rounded-lg bg-amber-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-800"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => abrirEliminar(c)}
                                                className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-red-700"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

           
            {editando && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3">
                    <form onSubmit={onSubmit} className="w-full max-w-md rounded-2xl bg-[rgba(240,235,229,1)] p-6 shadow-xl">
                        <Heading level={3} className="text-muted mb-4">
                            {editando === "nuevo" ? "Nuevo cliente" : `Editar cliente #${editando.id.slice(-6)}`}
                        </Heading>

                        <div className="space-y-3">
                            <div>
                                <label className={label}>Nombre</label>
                                <input className={campo} required value={form.nombre}
                                    onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
                            </div>
                            <div>
                                <label className={label}>Correo</label>
                                <input className={campo} type="email" required value={form.correo}
                                    onChange={(e) => setForm({ ...form, correo: e.target.value })} />
                            </div>
                            <div>
                                <label className={label}>Telefono</label>
                                <input className={campo} value={form.telefono ?? ""}
                                    onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
                            </div>
                            <div>
                                <label className={label}>Pago</label>
                                <input className={campo} required value={form.pago}
                                    onChange={(e) => setForm({ ...form, pago: e.target.value })} />
                            </div>
                            <div>
                                <label className={label}>Monto</label>
                                <input className={campo} type="number" min={0} step="0.01" required value={form.monto}
                                    onChange={(e) => setForm({ ...form, monto: Number(e.target.value) })} />
                            </div>
                        </div>

                        {guardar.isError && (
                            <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">{guardar.error.message}</p>
                        )}

                        <div className="mt-5 flex justify-end gap-2">
                            <button type="button" onClick={cerrarModal}
                                className="rounded-lg border border-gray-400 px-4 py-2 text-sm">
                                Cancelar
                            </button>
                            <button type="submit" disabled={guardar.isPending}
                                className="bg-amber-900 px-5 py-2 text-sm font-bold text-white hover:bg-amber-800 disabled:opacity-60">
                                {guardar.isPending ? "Guardando..." : "Guardar"}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            
            {porEliminar && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3">
                    <div className="w-full max-w-sm rounded-2xl bg-[rgba(240,235,229,1)] p-6 shadow-xl">
                        <Heading level={3} className="text-muted mb-3">Eliminar cliente</Heading>
                        <p>
                            ¿Seguro que quieres eliminar a <strong>{porEliminar.nombre}</strong>? Esta accion no se puede deshacer.
                        </p>

                        {borrar.isError && (
                            <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">{borrar.error.message}</p>
                        )}

                        <div className="mt-5 flex justify-end gap-2">
                            <button onClick={() => setPorEliminar(null)}
                                className="rounded-lg border border-gray-400 px-4 py-2 text-sm">
                                Cancelar
                            </button>
                            <button onClick={() => borrar.mutate(porEliminar.id)} disabled={borrar.isPending}
                                className="rounded-lg bg-red-600 px-5 py-2 text-sm font-bold text-white hover:bg-red-700 disabled:opacity-60">
                                {borrar.isPending ? "Eliminando..." : "Eliminar"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
