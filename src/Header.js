import React from 'react'
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from './AppRoutes';
const Header = () => {
    return (
        <div>
            <AppRoutes />
        </div>
    )
}

export default Header