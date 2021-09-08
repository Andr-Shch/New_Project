import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider, } from '@material-ui/core';


const theme = createTheme({
  palette:{
    primary:{
      main: '#9c27b0'
    }
  },
  typography:{
    fontFamily:'Der Neue Spargel',
    fontWeightLight:400,
    fontWeightBold:700,
    fontWeightRegular:500
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
     <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
     </Router>
    </ThemeProvider>
  );
}

export default App;
