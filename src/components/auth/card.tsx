const AuthCard = ({ ...props }: React.HTMLAttributes<HTMLFormElement>) => {
  return (
    <form {...props} className="w-75 bg-sky-300/20 rounded-xl border-2 border-sky-50/50 backdrop-blur-md backdrop-saturate-150 backdrop-brightness-102.5 shadow-[0_0_2px_rgba(0,0,0,.5)] flex flex-col gap-4 p-4 pointer-events-auto">
      {props.children}
    </form>
  )
}

export default AuthCard
