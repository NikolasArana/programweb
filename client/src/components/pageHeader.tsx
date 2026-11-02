

interface PageHeaderProps {
    titulo: string,
    subtitulo: string
}



export const PageHeader = ({titulo, subtitulo}: PageHeaderProps) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 px-6 py-20 text-white shadow-2xl">
  
  <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

  <div className="relative mx-auto max-w-5xl">
    <ul className="flex items-center justify-between border-b border-white/10 pb-6">
      <li className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
        {titulo}
      </li>
      <li className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-200 shadow-inner backdrop-blur transition hover:bg-white/10">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        ¡Hola! 
      </li>
    </ul>

    <div className="py-10 text-lg font-light leading-relaxed text-gray-300">
      {subtitulo}
    </div>

    
    <div className="h-1 w-24 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500" />
  </div>
</header>
  )
}
