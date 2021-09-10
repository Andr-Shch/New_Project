import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';


const drawWidth = 200;

const useStyles = makeStyles((theme)=>{
    return{
    drawer: {
        width: drawWidth
    },
    page: {
        backgroundColor: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3)
    },
    drawerPaper: {
        width: drawWidth,
       
    },
    root: {
        display: 'flex'
    },
    active:{
        background: '#ffcbf2'
    },
    title:{
        padding: theme.spacing(2)
    },
    appBar:{
        width: `calc(100% - ${drawWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date:{
        flexGrow: 1
    },
    avatar:{
        marginLeft: theme.spacing(2)
    }
}
})

const Layout = ({ children }) => {

    const location = useLocation()
    const history = useHistory()
    const classes = useStyles()
     
    const menuItems = [
        {
            text: 'TO-DO LIST',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'CREATE NOTE',
            icon: <AddCircleOutlined color='secondary' />,
            path: '/create'
        }

    ]

    return (
        <div className={classes.root}>

            <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
                    <Typography className={classes.date}>
                     Today is the {format(new Date(), 'do MMMM Y')}
                     </Typography>
                     <Typography>
                       Andrij
                     </Typography>

                     <Avatar src='https://avatars.githubusercontent.com/u/74563519?v=4' 
                              className={classes.avatar}/>

            </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        My Notes:
                    </Typography>

                </div>

                <List>
                    {menuItems.map(item => (
                        <ListItem 
                            button 
                            key={ item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname==item.path? classes.active:null} >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
         
            <div className={classes.page}>
            <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
};

export default Layout;