import React from 'react'
import './estilos.css'

export default function table() {
    return (
        <table className="table table-bordered tableAsisten">
            <thead className="thead">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col" className="dia">Lunes 31 agosto</th>
                    <th scope="col" className="dia">Martes 01 septiembre</th>
                    <th scope="col" className="dia">Miercoles 02 septiembre</th>
                    <th scope="col" className="dia">Jueves 03 septiembre</th>
                    <th scope="col" className="dia">Viernes 04 septiembre</th>
                    <th scope="col" className="dia">Sabado 05 2septiembre</th>
                    <th scope="col" className="dia">Domingo 06 septiembre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Emmanuel Aviles Pacheco</td>
                    <td >
                        <span class="badge bg-checada btn">
                            <i className="far fa-check-circle btn-block h4"></i> 
                            8:50-5:10
                        </span>
                    </td>
                    <td >
                        <span class="badge bg-falta btn">
                            <i className="far fa-times-circle btn-block h4"></i> 
                            8:50-5:10
                        </span>
                    </td>
                    <td>8:50-5:10</td>
                    <td>8:50-5:10</td>
                    <td>8:50-5:10</td>
                    <td>8:50-5:10</td>
                    <td>8:50-5:10</td>
                </tr>
            </tbody>
        </table>
    )
}
