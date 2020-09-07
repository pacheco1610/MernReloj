import React,{useEffect,useState}  from 'react'
import axios from 'axios'

export default function NoteList() {
    const [notes,setNotes] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await axios.get('http://localhost:4000/api/notes')
            setNotes(res.data)
        }  
        fetchData() 
    })
    return (
        <div className="row">
          {notes.map(note=>
            <div className="col-md-4 p-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            {note.title}
                            {note.author}
                        </h3>
                    </div>
                    <div className="card-body">
                        {note.content}
                    </div>
                </div>
            </div>
            )}  
        </div>
    )
}
