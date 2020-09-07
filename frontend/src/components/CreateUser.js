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
    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users',{
            username:username
        })
        setUsername('')
    }   
    const DeleteUser= async(id)=> {
        await axios.delete(`http://localhost:4000/api/users/${id}`)
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                       <div className="card card-body">
                            <h3 className="card-title">Create New User</h3>
                           <form onSubmit={(e)=>onSubmit(e)}>
                                <div className="form-group">
                                    <input type="text" value={username} className="form-control" onChange={(e)=>setUsername(e.target.value)}/>
                                </div>
                                <div className="form-group mt-2">
                                    <button type="submit" className="btn btn-block btn-primary">Save</button>
                                </div>
                           </form>
                       </div>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            {usuarios.map(usuario=>
                                <li className="list-group-item
                                list-group-item-action" 
                                onDoubleClick={()=>DeleteUser(usuario._id)}
                                key={usuario._id}>
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
