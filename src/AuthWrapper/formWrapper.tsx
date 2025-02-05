import { FormEvent, forwardRef, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  func: (e: FormEvent<HTMLFormElement>)=>void;
}

const wh_full = `
  w-full
  h-full`

const bg = `
  bg-[url('/images/bg_portrait.jpg')]
  lg:bg-[url('/images/bg.jpg')]
  bg-no-repeat
  bg-cover`

const FormWrapper = forwardRef<HTMLFormElement, Props>((props, ref) => (
  <>
    <div className={`w-svw h-svh ${bg}`}>
      <div className={`backdrop-blur-xl backdrop-brightness-[1.125] p-2 ${wh_full}`} >
        <div className={`rounded-lg shadow-[0_0_8px_inset_rgba(0,0,0,.15)] flex justify-center items-center overflow-scroll ${wh_full} ${bg}`}>
          <form className="
              w-[300px]
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
          " onSubmit={props.func} ref={ref}>
            {props.children}
          </form>
        </div>
      </div>
    </div>
  </>
)
)

export default FormWrapper
