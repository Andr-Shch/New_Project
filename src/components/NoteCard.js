import { Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';


const  useStyles = makeStyles({
    icon:{
     fontSize:30
    }
  })

const NoteCard = ({note, handleDelete}) => {
    const classes = useStyles();
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
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