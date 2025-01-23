type Props = {
    logoSize: number
    className?: string
}

const Logo = ({logoSize, className}: Props) => {

    const newSize = logoSize + 'px'

    return (
        <div className={`
            flex
            flex-col
            justify-center
            items-center
        ` + className} style={{"width": 4.5 * logoSize + `px`}}>
            <div className="sq0 grid grid-cols-2 justify-center items-center saturate-[1.05] transform-gpu" style={{ width: (2 * logoSize + `px`), height: (2 * logoSize + `px`) }}>
                <span className="sq bg-amber-400 transform-gpu" style={{ width: newSize, height: newSize }}></span>
                <span className="sq bg-orange-800 transform-gpu" style={{ width: newSize, height: newSize }}></span>
                <span className="sq bg-blue-700 transform-gpu" style={{ width: newSize, height: newSize }}></span>
                <span className="sq bg-red-600 transform-gpu" style={{ width: newSize, height: newSize }}></span>
            </div>
            <style>
                {`
                    .sq0 {
                        transform: rotate(45deg);
                        transition: transform 45s ease;
                        will-change: transform;
                    }

                    .sq0:hover {
                        transform: rotate(10845deg);
                    }

                    .sq0:hover .sq {
                        border-radius: 50%;
                        transform: scale(.8);
                    }

                    .sq {
                        box-shadow: -1.5px 0 2px rgba(0, 0, 0, .25);
                        transition: 400ms;
                        will-change: transform border-radius;
                    }
                `}
            </style>
        </div>
    )
}

export default Logo