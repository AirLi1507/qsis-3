type Props = {
    logoSize: number
    className?: string
}

const Logo = ({logoSize, className}: Props) => {
    return (
        <>
            <div className={`w-[${logoSize}px] h-[${logoSize}px]`}>

            </div>
        </>
    )
}

export default Logo
