import React, { useContext } from 'react';
import Marker from './marker';
import { PageContext } from '../contexts/PageContext';

function SideBar() {

    const pages = useContext(PageContext);

    return (
        <div className='l-main__sidebar-container'>
            <div className='logo-sidebar'>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NCAyN0M1NCA0MS45MTIgNDEuOTEyIDU0IDI3IDU0QzEyLjA4OCA1NCAwIDQxLjkxMiAwIDI3QzAgMTIuMDg4IDEyLjA4OCAwIDI3IDBDNDEuOTEyIDAgNTQgMTIuMDg4IDU0IDI3WiIgZmlsbD0iI0Y0M0UzNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMjdDNiAxNS40MDIgMTUuNDAyIDYgMjcgNkMzOC41OTggNiA0OCAxNS40MDIgNDggMjdINDIuNzVDNDIuNzUgMTguMzAxNSAzNS42OTg1IDExLjI1IDI3IDExLjI1QzE4LjMwMTUgMTEuMjUgMTEuMjUgMTguMzAxNSAxMS4yNSAyN0MxMS4yNSAzNS42OTg1IDE4LjMwMTUgNDIuNzUgMjcgNDIuNzVWNDhDMTUuNDAyIDQ4IDYgMzguNTk4IDYgMjdaTTI3IDM5LjZDMjAuMDQxMiAzOS42IDE0LjQgMzMuOTU4OCAxNC40IDI3QzE0LjQgMjAuMDQxMiAyMC4wNDEyIDE0LjQgMjcgMTQuNEMzMy45NTg4IDE0LjQgMzkuNiAyMC4wNDEyIDM5LjYgMjdIMzUuMDE4MkMzNS4wMTgyIDIyLjU3MTcgMzEuNDI4MyAxOC45ODE4IDI3IDE4Ljk4MThDMjIuNTcxNyAxOC45ODE4IDE4Ljk4MTggMjIuNTcxNyAxOC45ODE4IDI3QzE4Ljk4MTggMzEuNDI4MyAyMi41NzE3IDM1LjAxODIgMjcgMzUuMDE4MlYzOS42WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt=""/>
            </div>

        {pages.map(element => {
            return (
                <div className='l-main__sidebar-container__item' key={element.page}>
                    <a href={element.page}>
                        <Marker
                            active={element.page === window.location.pathname ? true : ''} 
                        />
                        <div className='sidebar-icon'>
                            <img src={element.image}/>
                        </div>
                        <p className='sidebar-title'>{element.name}</p>
                    </a>
                </div>
            )
        })}

        </div>
    )
}

export default SideBar;