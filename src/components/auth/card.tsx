import Logo from "../branding/logo"

const Card = ({ children, onSubmit, logoSpin }: { children: React.ReactNode, onSubmit?: (arg: React.FormEvent) => Promise<void>, logoSpin?: boolean }) => {
  return (
    <form className="m-auto w-72 bg-sky-300/20 border-2 border-sky-50/50 rounded-lg shadow-md shadow-black/15 flex flex-col gap-4 items-center backdrop-blur-md backdrop-saturate-150 backdrop-brightness-102.5 p-4" onSubmit={onSubmit}>
      <div className="mt-6 mb-4">
        <Logo size={72} spin={logoSpin} />
      </div>
      <span className="text-sky-700 text-3xl font-bold select-none">
        OpenSIS
      </span>
      {children}
    </form>
  )
}

export default Card
