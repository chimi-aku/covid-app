import { render } from '@testing-library/react';
import React from 'react'

const ErrorPage = () => {
    return(
        <div className='error'>
            <p>This page doesn't exist</p>
        </div>
    )
}

export default ErrorPage;