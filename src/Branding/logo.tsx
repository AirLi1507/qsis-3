type Props = {
    logoSize: number
    className?: string
}

const Logo = ({logoSize, className}: Props) => {

    const outerSq = `
        grid
        grid-cols-2
        rotate-45
        hover:rotate-[10845deg]
        active:rotate-[10845deg]
        will-change-transform
        transform-gpu
        duration-[45s]
        `

    const innerSq = `
        w-full
        h-full
        rounded-none
        group-hover:rounded-[50%]
        group-active:rounded-[50%]
        shadow-[-1.5px_0px_2px_rgba(0,0,0,.25)]
        group-hover:scale-[.8]
        group-active:scale-[.8]
        transform-gpu
        duration-500
        select-none
        ` 

    return (
        <>        
            <div className={`flex flex-col justify-center items-center ${className}`}>
                <div className={`group ${outerSq}`} style={{width: `${2 * logoSize}px`, height: `${2 * logoSize}px`}}>
                    <span className={`bg-amber-300 ${innerSq}`}></span>
                    <span className={`bg-orange-800 ${innerSq}`}></span>
                    <span className={`bg-blue-700 ${innerSq}`}></span>
                    <span className={`bg-red-600 ${innerSq}`}></span>
                </div>
            </div>
        </>
    )
}

export default Logo
