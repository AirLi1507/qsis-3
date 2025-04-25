import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  func: (e: React.FormEvent<HTMLFormElement>) => void;
}

const schoolBg = `
  bg-[url('https://cdn.hypernix.dev/img/bg_portrait.webp')]
  lg:bg-[url('https://cdn.hypernix.dev/img/bg.webp')]
  bg-no-repeat
  bg-cover`

const FormWrapper = ({ children, func }: Props) => {

  const navigate = useNavigate()

  const isLoggedIn = localStorage.getItem('login') === 'true'

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard')
    }
  }, [])

  return (
    <div className={`w-svw h-svh ${schoolBg} ${isLoggedIn ? "hidden" : null} select-none`} onContextMenu={(e) => { e.preventDefault() }}>
      <div className={`w-full h-full backdrop-blur-xl backdrop-brightness-[1.125] p-2`}>
        <div className={`w-full h-full rounded-lg shadow-[0_0_8px_inset_rgba(0,0,0,.15)] flex justify-center items-center overflow-scroll ${schoolBg}`}>
          <form className="
            w-[280px]
            lg:w-[300px]
            xl:w-[310px]
            bg-sky-300/20
            border-2
            border-sky-50/50
            backdrop-blur-md
            rounded-xl
            shadow-[2px_2px_8px_rgba(0,0,0,.25)]
            flex
            flex-col
            justify-start
            items-center
            p-4
            duration-200
            transform-gpu
            "
            onSubmit={func}>
            {children}
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormWrapper
