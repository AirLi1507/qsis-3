type Props = {
    logoSize: number
    className?: string
}

const Logo = ({logoSize, className}: Props) => {

    const outerSq = `
        w-(--divSize)
        h-(--divSize)
        grid
        grid-cols-2
        saturate-[1.05]
        rotate-45
        hover:rotate-[10845deg]
        will-change-transform
        transform-gpu
        duration-[45s]
        `

    const innerSq = `
        w-full
        h-full
        rounded-none
        group-hover:rounded-[50%]
        shadow-[-1.5px_0px_2px_rgba(0,0,0,.25)]
        group-hover:scale-[.8]
        transform-gpu
        duration-500
        ` 

    return (
        <>        
            <style>{`:root {--divSize: ${2 * logoSize}px}`}</style>
            <div className={`flex flex-col justify-center items-center ${className}`}>
                <div className={`group ${outerSq}`}>
                    <span className={`bg-amber-400 ${innerSq}`}></span>
                    <span className={`bg-orange-800 ${innerSq}`}></span>
                    <span className={`bg-blue-700 ${innerSq}`}></span>
                    <span className={`bg-red-600 ${innerSq}`}></span>
                </div>
            </div>
        </>
    )
}

export default Logo
