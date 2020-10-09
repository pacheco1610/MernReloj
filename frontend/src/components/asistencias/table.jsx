import React,{useState,useEffect} from 'react'
import './estilos.css'
import Socket from '../socket'
import axios from 'axios'
import Moment from 'moment'
require('moment/locale/es.js');

export default function Table(props) {
    const [checadas,setChecadas] = useState({})
    const checadasFinal=[]
    const dias=[]
    useEffect(()=>{
        const fechData = async()=>{
            const res = await axios.get('http://localhost:4000/api/checadas/')
            setChecadas(res.data)
        }
        fechData()
        Socket.on('checada',(data)=>{
            
        })
       
    },[])
    const RenderFecha =()=>{
        for (let index = 0; index <= props.diaFinal.diff(props.DiaInicio,'days'); index++) {
            dias.push(Moment(props.DiaInicio).add(index,'days').format('YYYY-MM-DD'))
        }
        console.log(dias)
    }
    const renderChecada =()=>{
       RenderFecha()
        if(checadas.length>0){
            checadas.map(checada=>
                {
                    const filtro = checadasFinal.filter(filtro => filtro.empleado === checada.empleado)
                    if (filtro.length===0) {
                        const dias = checadas.filter(empleado=>empleado.empleado===checada.empleado)
                        checadasFinal.push({
                            empleado:checada.empleado,
                            dias:dias
                        })
                    }
                }
            )
        }
    }
    return (
        <table className="table table-bordered tableAsisten">
            {renderChecada()}
            <thead className="thead">
                <tr>
                    <th scope="col">Nombre</th>
                    {dias.map(dia=>
                        <th key={dia} scope="col" className="dia text-center">
                            {Moment(dia).format('dddd')}
                            <br/>
                            {Moment(dia).format('DD/MM/YYYY')}
                            </th>
                    )}
                </tr>
            </thead>
            <tbody>
            {checadasFinal.map(empleado=>
            <tr key={empleado.empleado}>
                <td>{empleado.empleado}</td>
                {dias.map(dia=>
                    {
                        const filtro = empleado.dias.filter(checada=> checada.dia === dia)
                        if (filtro.length>0) {
                            if (filtro[0].tipo ==="Correcta") {
                                return(
                                    <td key={filtro[0].entrada}>
                                        <span className="badge bg-checada btn">
                                            <i className="far fa-check-circle btn-block h4"></i> 
                                            {Moment(new Date(filtro[0].entrada)).format('HH:mm')} - {filtro[0].salida ? Moment(new Date(filtro[0].salida)).format('HH:mm'):'****'}
                                        </span>
                                    </td>
                                )
                            }
                            else if(filtro[0].tipo==="Falta"){
                                return(
                                    <td key={filtro[0].entrada}>
                                        <span className="badge bg-falta btn">
                                            <i className="far fa-check-circle btn-block h4"></i> 
                                            {Moment(new Date(filtro[0].entrada)).format('HH:mm')} - {filtro[0].salida ? Moment(new Date(filtro[0].salida)).format('HH:mm'):'****'}
                                        </span>
                                    </td>
                                )
                            }
                        }else{
                            return(
                                <td key={dia}>
                                    <span className="badge bg-Outchecada btn">
                                        ---
                                    </span>
                                </td>
                            )
                        }
                    }
                )}
            </tr>
            )}
                
            </tbody>
        </table>
    )
}
