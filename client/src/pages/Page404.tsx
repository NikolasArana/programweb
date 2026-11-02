import { Link } from "react-router"

export const Page404 = () => {
    return (
        <section className="py-16">

            <div className="max-w-7xl mx-auto px-3">
                <p>pagina no encontrada</p>

                <Link to="/" className="inline-block bg-primary text-background px-6 py-3 rounded-full hover:bg-secondary">

                    Volver al inicio

                </Link>

            </div>

        </section>
    )
}
