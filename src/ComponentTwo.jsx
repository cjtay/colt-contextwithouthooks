import React from 'react';
import ComponentThree from './ComponentThree';

const ComponentTwo = () => {
    return (
        <>
            <h1>Page 2 with Page 2 embedded</h1>
            <ComponentThree />
        </>
    );
};

export default ComponentTwo;
