import { useState, useCallback } from 'react';

export const useSwitch = (initialValue = false) => {
    const [toggle, setToggle] = useState(initialValue) 

    const change = useCallback(() => {
        setToggle(prev => !prev);
    }, []);

    return [toggle, change];

}

export const SwitchBox = ({ initialValue = false }) => {
    const [toggle, change] = useSwitch(initialValue);
    
    console.log('il mio hook adesso è:', toggle)

    return (
        <>
            <div className="containerHooks">
                <h2>valore attuale è: {toggle ? 'true' : 'false' }</h2>
                <button onClick={change}>Cambio stato</button>
            </div>       
        </>
        
    )
    
}
