import { useState, useEffect } from "react";

export const useDate = () => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const dateId = setInterval(() => {
            setNow(new Date())
        }, 1000)
        return () => { clearInterval(dateId) };
    }, []);

    return {
        anno: now.getFullYear(),
        mesi: now.getMonth() + 1,
        giorno: now.getDate(),

        dataItaliana: now.toLocaleDateString('it-IT'),
        dataeOra: now.toLocaleString('it-IT')
    };
};

export const DateBox = () => {
    const getDati = useDate()
    const { dataeOra } = getDati

    return (
        <>
            <h2>Data e ora Attuali:</h2>
            <p>{dataeOra}</p>
        </>
    )
};