import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, TextField } from '@material-ui/core';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import KeyboardArrowRightTwoToneIcon from '@material-ui/icons/KeyboardArrowRightTwoTone';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useHistory } from "react-router-dom";

const  useStyles = makeStyles({
  field:{
   marginTop: 20,
   marginBottom: 20,
   display: 'block'
  },
  title:{
    marginBottom: 20
  }
})


export default function Create() {
 
 const classes = useStyles()
 const [title, setTitle] = useState('')
 const [details, setDetails] = useState('')
 const [titleError, setTitleError] = useState(false)
 const [detailsError, setDetailsError] = useState(false)
 const [category, setCategory] = useState('')
 const history = useHistory()

const handleSabmit=(e)=>{
  e.preventDefault()
  setTitleError(false)
  setDetailsError(false)
  if(title == ''){
    setTitleError(true)
  }
  if(details == ''){
    setDetailsError(true)
  }

  if(title&&details){
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ title, details, category })
    }).then(()=> history.push('/'))
   
  }
}

 console.log(title);
 console.log(details);
 


  return (
    <Container>
      
      

      <Typography  
        
        className={classes.title}
        variant='h6'
        component='h2' 
        color='textSecondary' 
        gutterBottom >
        Create New Note
      </Typography>
    

      <form noValidate autoComplete='off' onSubmit={handleSabmit}>
          <TextField 
            onChange ={(e)=>setTitle(e.target.value)}
            className={classes.field}
            label='Note Tetle'
            color='primary'
            variant="filled"
            fullWidth
            required
            error={titleError}
            />

            <TextField 
            onChange = {(e)=>setDetails(e.target.value)}
            className={classes.field}
            label='Details'
            color='primary'
            variant="filled"
            fullWidth
            multiline
            rows={4}
            required
            error={detailsError}/>
      <FormControl className={classes.field}>
       <FormLabel>Note Category</FormLabel>
      <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)}>
        <FormControlLabel value='money' label='Money' control={<Radio/>}/>
        <FormControlLabel value='todos' label='TODO' control={<Radio/>}/>
        <FormControlLabel value='reminders' label='Reminders' control={<Radio/>}/>
        <FormControlLabel value='work' label='Work' control={<Radio/>}/>
      </RadioGroup>
      </FormControl>
      <Button 
             className={classes.btn}
             type='submit' 
             color='primary'
             variant='contained' 
             endIcon={<KeyboardArrowRightTwoToneIcon/>} >
                submit
     </Button>
      </form>

      

    
    
    </Container>
  )
}
