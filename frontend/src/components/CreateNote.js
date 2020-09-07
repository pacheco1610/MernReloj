import React,{useEffect,useState} from 'react'
import axios from 'axios'


export default function CreateNote() {
    const [usuarios,setUsuarios] = useState([])
    const [Notas,setNota] = useState({
        title:'',
        content:'',
        date: new Date(),
        author:''
    })
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get('http://localhost:4000/api/users')
            setUsuarios(res.data)
        }  
        fetchData() 
    })
    const onInputChange =(e)=>{
        setNota({...Notas,[e.target.name]:e.target.value})
    }
    const onSubmit = async (e) =>{
        e.preventDefault()
        const res = axios.post('http://localhost:4000/api/notes',Notas)
        console.log(res)

    }
    return (
       <div className="col-md-6 offset-md-3">
           <div className="card card-body">
                <h3 className="card-title">Create a Note</h3>
                <form onSubmit={(e)=>onSubmit(e)} >
                    <div className="form-group">
                        <select
                        name="author"
                        className="form-control"
                        onChange={(e)=>onInputChange(e)}
                        >
                            <option value="0">Selecciona un author</option>
                            {usuarios.map(usuario=>
                                <option key={usuario._id} value={usuario.username}>{usuario.username}</option>    
                            )}
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <input
                        onChange={(e)=>onInputChange(e)}
                        value={Notas.title}
                        name="title"
                        placeholder="Title"
                        type="text" 
                        className="form-control"
                        requeried="true"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <textarea
                        onChange={(e)=>onInputChange(e)}
                        value={Notas.content}
                        name="content" 
                        className="form-control"
                        placeholder="content"
                        requeried="true"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <button type="submit" className="btn btn-block btn-primary">Save</button>
                    </div>
                </form>
           </div>
       </div>
    )
}
