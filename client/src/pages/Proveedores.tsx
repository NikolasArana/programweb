import { useState, type FormEvent } from "react"
import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import Heading from "../components/Headings"
import banner from "../assets/banner/baner2.webp"

interface LoginForm {
  email: string
  password: string
}

type Errores = Partial<Record<keyof LoginForm, string>>

const VACIO: LoginForm = { email: "", password: "" }

const validar = (f: LoginForm): Errores => {
  const errores: Errores = {}
  if (!f.email.trim()) errores.email = "El correo es obligatorio"
  else if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) errores.email = "Ingresa un correo válido"
  if (!f.password) errores.password = "La contraseña es obligatoria"
  else if (f.password.length < 6) errores.password = "Debe tener al menos 6 caracteres"
  return errores
}

export const Proveedores = () => {
  const [form, setForm] = useState<LoginForm>(VACIO)
  const [errores, setErrores] = useState<Errores>({})
  const [verPassword, setVerPassword] = useState(false)
  const [validado, setValidado] = useState(false)

  const cambiar = (campo: keyof LoginForm, valor: string) => {
    setForm({ ...form, [campo]: valor })
    setErrores({ ...errores, [campo]: undefined })
    setValidado(false)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nuevos = validar(form)
    setErrores(nuevos)

    if (Object.keys(nuevos).length === 0) {
      
      setValidado(true)
    }
  }

  const campo =
    "w-full rounded-lg border bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-amber-900 focus:ring-1 focus:ring-amber-900"
  const label = "block text-sm font-semibold mb-1 text-muted"

  return (
    <section className="bg-[rgba(240,235,229,1)] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-3">
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">

          
          <div className="relative hidden lg:block">
            <img src={banner} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 flex h-full flex-col justify-end p-10 text-white">
              <div className="mb-3 text-sm font-bold tracking-widest">SOLARA</div>
              <Heading level={3} className="font-normal text-white">
                ROPA CON ESTILO SURFER, 100% RECICLADA
              </Heading>
            </div>
          </div>

          
          <div className="p-8 md:p-12">
            <div className="mb-2 text-sm text-muted">BIENVENIDO</div>
            <Heading level={2} className="mb-8 font-normal text-muted">
              INICIAR SESIÓN
            </Heading>

            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="email" className={label}>Correo</label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/50"
                  />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="correo@ejemplo.com"
                    value={form.email}
                    onChange={(e) => cambiar("email", e.target.value)}
                    aria-invalid={!!errores.email}
                    className={`${campo} ${errores.email ? "border-red-500" : "border-gray-300"}`}
                  />
                </div>
                {errores.email && <p className="mt-1 text-xs text-red-600">{errores.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className={label}>Contraseña</label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/50"
                  />
                  <input
                    id="password"
                    type={verPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => cambiar("password", e.target.value)}
                    aria-invalid={!!errores.password}
                    className={`${campo} pr-10 ${errores.password ? "border-red-500" : "border-gray-300"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setVerPassword(!verPassword)}
                    aria-label={verPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/60 hover:text-muted"
                  >
                    <FontAwesomeIcon icon={verPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
                {errores.password && <p className="mt-1 text-xs text-red-600">{errores.password}</p>}
              </div>

              {validado && (
                <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
                  Datos válidos. La conexión con el servidor se agregará más adelante.
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-amber-900 px-6 py-3 font-bold text-white transition hover:bg-amber-800"
              >
                INICIAR SESIÓN
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-muted/80">
              <Link to="/" className="underline hover:text-amber-900">Volver al inicio</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}