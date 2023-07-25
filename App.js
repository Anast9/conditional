// logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
class App extends Component {

  state = {
    cars: [
      {name: 'Моя девушка - инопланетянка', year: 2022},
       {name: 'Глоток молодости', year: 2018},
       {name: 'Невеста на замену', year: 2019}

      
    ],

    pageTitle: 'Дорамы смотреть онлайн',
    showCars: false
  }

  toggleCarsHandler = () =>{

    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeTitleHandler = pageTitle =>{
      this.setState({pageTitle})
  }

  
  
  render() {

    console.log('Render')

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null;
if(this.state.showCars){
  cars = this.state.cars.map((car, index) =>{
    return (
      < Car
          key={index}
          name={car.name}
           year={car.year} 
           onChageTile={() => this.changeTitleHandler(car.name)}
           />
    )
  
  })
}

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

       


<button onClick={this.toggleCarsHandler}>Поиск  Дорам</button>

{cars}
 </div>
);

}

}


export default App;
