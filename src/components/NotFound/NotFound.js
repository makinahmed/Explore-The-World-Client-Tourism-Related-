import React from 'react';
import error from '../../images/notfound.png'
const NotFound = () => {
    return (
        <div>
            <div style={{ width: '95%', margin: 'auto', height: 'auto' }}>
                <img style={{ width: '100%', height: 'auto' }} src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;