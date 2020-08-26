import React, {useEffect,useState} from 'react'
import axios from 'axios'


export default function CreateUser() {
    const [usuarios,setUsuario] = useState([])
    const [username,setUsername] = useState('')
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get('http://localhost:4000/api/users')
            setUsuario(res.data)
        }   
        fetchData() 
    })
    const onSubmit=(e)=>{
        alert('aiuda')
    }   

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                       <div className="card card-body">
                            <h3 className="card-title">Create New User</h3>
                           <form onSubmit={()=>onSubmit()}>
                                <div className="form-group">
                                    <input type="text" value={username} className="form-control" onChange={(e)=>setUsername(e.target.value)}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                           </form>
                       </div>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            {usuarios.map(usuario=>
                                <li className="list-group-item list-group-item-action" key={usuario._id}>
                                    {usuario.username}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
