import React, { useContext } from 'react';
import { DataContext } from './DataContext';

function Child() {
    const { stringData, setStringData, numberData, setNumberData, booleanData, setBooleanData } = useContext(DataContext);

    function handleStringClick() {
        setStringData('SHUBHAM SINGH');
    }

    function handleNumberClick() {
        setNumberData(prevState => prevState + 1);
    }

    function handleBooleanClick() {
        setBooleanData(!booleanData);
    }

    return (
        <>
            <div>
                <p>String Data: {stringData}</p>
                <button onClick={handleStringClick}>Update String Data</button>
                <p>Number Data: {numberData}</p>
                <button onClick={handleNumberClick}>Update Number Data</button>
                <p>Boolean Data: {booleanData ? 'true' : 'false'}</p>
                <button onClick={handleBooleanClick}>Update Boolean Data</button>
            </div>
            
        </>

    );
}

export default Child;
