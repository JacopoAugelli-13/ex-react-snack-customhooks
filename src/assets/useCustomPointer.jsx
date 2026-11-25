import { useState, useEffect } from 'react';

export const useCustomPointer = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    
    useEffect(() => {
        const upPosition = e => {
            setMousePosition({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', upPosition) 
        return () => {
            window.removeEventListener('mousemove', upPosition)
        }
    },[])

    return mousePosition;
}

export const PointerBox = ({cursor = '⭐️'}) => {
    const {x, y} = useCustomPointer()
    

    return(
        <>
        <h2>Custom hook</h2>
        <p>Muoviti per vedere il nuovo cursore</p>
        <p>x:{x} y:{y}</p>
        <span
                aria-hidden="true"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
                    pointerEvents: 'none',
                    fontSize: '1.5rem',
                    lineHeight: 1,
                }}
            >
                {cursor}
            </span>
        </>
    )
}