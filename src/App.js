import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//TO DO
//create an input field where I can enter recipe name 
//create an input field where I can enter ingredients 
//create an input field for the method/instruction 
//when recipe is created make its own 'card'
//be able to delete cards 
//BONUS
  //be able to edit recipes 
  //be able to search recipes 
const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
  const classes = useStyles();

  const [isToggled, setIsToggled] = React.useState(false);
  function handleSwitchChange(event) {
    const isChecked = event.target.checked;
    setIsToggled(isChecked);
  }
  return (
    <div>
      <h1>RECIPES hello foo</h1>
      <h3>a place to keep your recipes safe</h3>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Recipe Name" variant="outlined" />
      <TextField id="outlined-basic" label="Ingredients" variant="outlined" />
      <TextField id="outlined-basic" label="Method" variant="outlined" />
      </form>
      <Switch
        checked={isToggled}
        onChange={handleSwitchChange}
        name="switchControl"
      />
      <Card >
        {isToggled ? 'foo' : 'bar'}
      </Card>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));