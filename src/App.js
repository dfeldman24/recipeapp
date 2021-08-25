import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//TO DO
//create an input field where I can enter recipe name 
//create an input field where I can enter ingredients 
//create an input field for the method/instruction 
//when recipe is created make its own 'card'
//be able to delete cards 
//BONUS
  //be able to edit recipes 
  //be able to search recipes 
//   class App extends React.Component { 

//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//   // const useStyles = makeStyles((theme) => ({
//   //   root: {
//   //     '& > *': {
//   //       margin: theme.spacing(1),
//   //       width: '25ch',
//   //     },
//   //   },
//   // }));
  
//   //const classes = useStyles();
  
//   const [isToggled, setIsToggled] = React.useState(false);
//   function handleSwitchChange(event) {
//     console.log('foo' + this.recipe)
//     //const isChecked = event.target.checked;
//     //setIsToggled(isChecked);
//   }
  


//   render() {
//     return (
//       <div>
//         <h1>RECIPES hello fucku</h1>
//         <h3>a place to keep your recipes safe</h3>
//         <form className={classes.root} noValidate autoComplete="off">
//         <TextField id="recipe" label="Recipe Name" variant="outlined" value= {this.recipe}/>
//         <TextField id="outlined-basic" label="Ingredients" variant="outlined" />
//         <TextField id="outlined-basic" label="Method" variant="outlined" />
//         <Button onClick={handleSwitchChange}>
//               Submit
//         </Button>
//         </form>
//         <Card >
//           {isToggled ? 'foo' : 'bar'}
//         </Card>
//       </div>
//     )
//   }
// }



class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {recipeValue: '',
                  methodValue: '',
                  recipeCardValue: "",
                  methodCardValue: ""};

    this.handleRecipeChange = this.handleRecipeChange.bind(this);
    this.handleMethodChange = this.handleMethodChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  handleRecipeChange(event) {
    this.setState({recipeValue: event.target.value});
  }

  handleMethodChange(event) {
    this.setState({methodValue: event.target.value});
  }

  handleSubmit(event) {

    // POST this.state.recipeValue & this.state.methodValue to the backend. 
    // on return set the state locally

    this.setState({recipeCardValue: this.state.recipeValue});
    this.setState({methodCardValue: this.state.methodValue});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <TextField id="recipe" label="Recipe" value={this.state.recipeValue} onChange={this.handleRecipeChange}  />
          <TextField id='method' label= "Method" value={this.state.methodValue} onChange={this.handleMethodChange} />
          <input type="submit" value="Submit" />
        </form>
        <Card >
      <CardContent>
        <Typography  gutterBottom>
          {this.state.recipeCardValue}
        </Typography>
        <Typography component="p">
          {this.state.methodCardValue}
        </Typography>
      </CardContent>
    </Card>
  
      
     </div>
    
    );
  }
}








ReactDOM.render(<App />, document.getElementById("root"));