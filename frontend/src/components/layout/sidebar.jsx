import React from 'react'
import {Link} from 'react-router-dom'

export default function sidebar() {
    const Toggle =()=>{
        document.getElementById('content-wrapper').classList.toggle('toggled')
    }
    return (
        <div id="sidebar-container" className="bg-white shadow-sm">
            <div className="logo mb-0 align-items-center">
                <div className="row">
                    <div className="col-5">
                        <h4 className="font-weight-bold text-white ">Template</h4>
                    </div>
                    <div className="col-7 text-right">
                        <button className="btn text-white" onClick={()=>Toggle()} >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="menu list-group-flush mt-1">
                <span className="list-group-item border-0 p-2  pl-4 font-weight-bold">Asitencia</span>
                <Link className="list-group-item btn-sidebar text-secondary btn-sidebar p-3 pl-4 border-0" to="/">
                    <i className="far fa-calendar-check mr-2"/>
                    <span>Asistencias</span>
                </Link>
                <Link className="list-group-item text-secondary  btn-sidebar p-3 pl-4  border-0" to="/">
                    <i className="far fa-calendar-plus mr-2"/>
                    <span>Eventos</span>
                </Link>
                <Link className="list-group-item text-secondary  btn-sidebar p-3 pl-4  border-0" to="/">
                    <i className="far fa-clock mr-2"/>
                    <span>Relojes</span>
                </Link>
                
            </div>
        </div>
    )
}
 