import React,{Fragment,useState,useEffect} from 'react'
import axios from "axios"
function DATA() {

    const [state, setstate] = useState({
      _id:"",
        title:"",
        content:""
    })

   
   
    const change=(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
    }


   
    

    const submit=(e)=>{
e.preventDefault();
  axios.post("http://localhost:5000/table",state).then(res=>console.log(res.data))
    }

    const [state1, setstate1] = useState([])
    const [id, setid] = useState("")
    const [get, setget] = useState({})

    useEffect(()=>{
           axios.get("http://localhost:5000/table").then(res=>setstate1(res.data))
    },setstate1)

    const submit1=(e)=>{
      e.preventDefault();
    axios.post(`http://localhost:5000/table/${id}`,id).then(res=>{setget(res.data[0]);console.log(res.data[0])})
          }

         

          const [obj, setobj] = useState({
            id:"",
            title:"",
            content:""
          })

          const submit2=(e)=>{
            e.preventDefault();
          axios.post(`http://localhost:5000/table/data/${obj.id}`,obj).then(res=>{console.log(res.data)})
                }
   
                const [objj, setobjj] = useState({
                  objjj:""
                })
      
                const submit3=(e)=>{
                  e.preventDefault();
                axios.post(`http://localhost:5000/table/delete/data`,objj).then(res=>{console.log(res.data)})
                      }
    return (
        <Fragment>
            <form onSubmit={submit}>
              <h1>insert data</h1>
              id:  <input name="_id" value={state._id} onChange={change}/><br/>
          title:  <input name="title" value={state.title} onChange={change}/><br/>
            content:<input name="content" value={state.content} onChange={change}/><br/>
            <button type="submit">send data</button>
            </form>
             

             <form onSubmit={submit1}>
            <h1>get singal data</h1>
            enter name:<input type="type" name="ID" value={id} onChange={(e)=>setid(e.target.value)}/>
            <button type="submit">click</button>
            </form>

    {get=={}?null:<p>name:{get.title}&nbsp;&nbsp;&nbsp;&nbsp;university:{get.content}</p>}
             <h1>EDIT DATA</h1>

             <form onSubmit={submit2}>
          
            ID:<input type="text" name="id" value={obj.id} onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})}/>
            title:<input type="text" name="title" value={obj.title} onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})}/>
            content:<input type="text" name="content" value={obj.content} onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})}/>
            <button type="submit">update</button>
            </form>

                <form onSubmit={submit3}>
                  <h1>delete data from database</h1>
                  enter ID:<input type="number" name="objjj" value={objj.objjj} onChange={(e)=>setobjj({[e.target.name]:e.target.value})} />
                  <button type="submit">delete</button>
                </form>
            <h1>database data</h1>
            <table border="1">
              <tr>
              <th>ID</th>
    <th>title</th>
    <th>content</th>
  </tr>
              {
                  state1.map((i)=>
                    <Fragment>
                       <tr>
                       <td>{i._id}</td>
              <td>{i.title}</td>
              <td>{i.content}</td>
                      </tr>
                        </Fragment>
                  )
              }
              </table>

              
        </Fragment>
    )
}

export default DATA;
