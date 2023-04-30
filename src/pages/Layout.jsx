import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Layout() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
            <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <Link className="nav-link text-info" to="/home">Home</Link>
                <Link className="nav-link text-info" to="/dashboard">DashBoard</Link>
            </div>
        </nav>
    )
}

export default Layout