import React from 'react'
import Table from './table'

export default function asistencia() {
    return (
        <div className="bg-white p-4 roundedPurple shadow-sm">
            <h4 className="mb-3 mt-3 h5"><i className="far fa-calendar-check mr-2"/>Asistencias</h4>
            <div className="row">
                <div className="col-7">
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-5">
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <Table/>
                </div>
            </div>
        </div>
    )
}
