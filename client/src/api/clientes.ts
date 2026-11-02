export interface datosCliente {
    id: string;
    nombre: string;
    telefono: string | null;
    correo: string;
    pago: string;
    monto: number;
}

export type ClienteForm = Omit<datosCliente, "id">;


const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
const BASE = `${API_URL}/datos`;

async function request<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });
    const json = await res.json().catch(() => null);
    if (!res.ok || !json?.success) {
        throw new Error(json?.error ?? `Error ${res.status}`);
    }
    return json.data as T;
}

export const listarClientes = () => request<datosCliente[]>(BASE);

export const crearCliente = (cliente: ClienteForm) =>
    request<datosCliente>(BASE, { method: "POST", body: JSON.stringify(cliente) });

export const actualizarCliente = (id: string, cliente: ClienteForm) =>
    request<datosCliente>(`${BASE}/${id}`, { method: "PUT", body: JSON.stringify(cliente) });

export const eliminarCliente = (id: string) =>
    request<{ id: string }>(`${BASE}/${id}`, { method: "DELETE" });