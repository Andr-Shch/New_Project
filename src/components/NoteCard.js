import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';


const  useStyles = makeStyles({
    icon:{
     fontSize:30
    },
    superClass: {
        border: (note) => {
            if (note.category == 'work') {
                return '1px solid #cdb4db'
            } else if (note.category == 'todos') {
                return '1px solid #ffbe0b'
            } else if (note.category == 'reminders') {
                return '1px solid #ff006e'
            } else if (note.category == 'money') {
                return '1px solid #06d6a0'
            }
        }
    },
    avatar: {
        backgroundColor: (note) => {
            if (note.category == 'work') {
                return '#cdb4db'
            } else if (note.category == 'todos') {
                return '#ffbe0b'
            } else if (note.category == 'reminders') {
                return '#ff006e'
            } else if (note.category == 'money') {
                return '#06d6a0'
            }
        }
    }
  })

const NoteCard = ({note, handleDelete}) => {
    const classes = useStyles(note);
    return (
        <div>
            <Card elevation={3} className={classes.superClass}>
                <CardHeader
                 avatar={
                     <Avatar className={classes.avatar}>
                         {note.category[0].toUpperCase()}
                     </Avatar>
                 }
                 action={
                     <IconButton onClick={()=>handleDelete(note.id)}>
                        <DeleteForeverTwoToneIcon className={classes.icon} />
                     </IconButton>
                 }
                 title={note.title}
                 subheader={note.category}
                />
                <CardContent>
                    <Typography variant='body2'>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NoteCard;