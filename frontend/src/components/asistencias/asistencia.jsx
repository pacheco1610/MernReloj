import React,{useState,useEffect} from 'react'
//import Table from './table'
import Moment from 'moment'

export default function Asistencia() {
    const [DiaInicio,setInicio] = useState(Moment(Moment().startOf('month').format('YYYY-MM-DD')))
    const [diaFinal,setFinal] = useState(Moment(Moment(DiaInicio).add(6,'days').format('YYYY-MM-DD')))
    const SemanaSiguiente = () =>{
        setInicio(Moment(Moment(DiaInicio).add(7,'days').format('YYYY-MM-DD')))
        setFinal(Moment(Moment(DiaInicio).add(14,'days').format('YYYY-MM-DD')))
    }
    const SemanaAnterior = () =>{
        setInicio(Moment(Moment(DiaInicio).subtract(14,'days').format('YYYY-MM-DD')))
        setFinal(Moment(Moment(DiaInicio).subtract(7,'days').format('YYYY-MM-DD')))
    }
    return (
        <div className="bg-white p-4 roundedPurple shadow-sm">
            <h4 className="mb-3 mt-3 h5"><i className="far fa-calendar-check mr-2"/>Asistencias</h4>
            <div className="row">
                <div className="col-7">
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-5">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <button onClick={()=> SemanaAnterior()} className="btn bg-primary text-white m-2"><i className="fas fa-arrow-left"></i></button>
                    <button onClick={()=> SemanaSiguiente()} className="btn bg-primary text-white m-2"><i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    Aqui va la tabla
                </div>
            </div>
        </div>
    )
}
