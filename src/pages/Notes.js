import { Container, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'

export default function Notes() {
 
const [notes, setNotes] = useState([])
console.log(notes)
 useEffect(()=>{
  fetch('http://localhost:8000/notes')
   .then(res=>res.json())
   .then(data=>setNotes(data))
 }, [])
 

 const handleDelete = async (id) =>{
   await fetch('http://localhost:8000/notes/'+ id, {
     method: 'DELETE',

   })
 
  const noteChecer = notes.filter(note=> note.id!= id)
  setNotes(noteChecer)
 }
  return (
    <Container>
    <Grid container spacing={3}>
      {notes.map(note=>(
        <Grid item xs={12} md={6} lg={4} xl={3} key={note.id}>
          <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
      ))}
   </Grid>
   </Container>
  )
}
