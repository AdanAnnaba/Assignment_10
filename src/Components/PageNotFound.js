import React from 'react';
import notfound from '../Assets/image/notfound.JPG';

const PageNotFound = () => {
    return (
        <div>
            <img className='w-100 h-75' src={notfound} alt="" />
        </div>
    );
};

export default PageNotFound;