import React, { Component } from 'react' ;
import evaluate from 'evaluator.js';
import CalculatorTitle from './CalculatorTitle' ;
import OutputScreen from './OutputScreen' ;
import Button from './Button';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
       question : '' ,
       answer : ''
    } ;
    this.handleClick = this.handleClick.bind(this) ;
  }

  handleClick(event){
    const value = event.target.value ;
    switch (value) {
      case '=' : {
        if (this.state.question !== ''){
          var ans = '';
          try{
              ans= evaluate(this.state.question)
            }
            catch(err){
              this.setState({answer : "Math Error"});
            }
            if (ans === undefined)
              this.setState({answer: "Math Error"});
            else
              this.setState({answer: ans , question : ''});
            break;
       
          }
        break;  
      }
      case 'Clear' :{
        this.setState({question: '' , answer : ''});
        break;
      }
      case 'Delete' : {
        var str = this.state.question;
        str = str.substr (0, str.length-1);
        this.setState({question : str });
        break;
      }
      default : {
        this.setState({question: this.state.question += value })
        break ;
      }
    }
  }

  
  render() {
    return (
      <div className='frame'>
      <CalculatorTitle value= "Blessingkeyz Calculator"/>
      <div class='mainCalc'>
      <OutputScreen answer = {this.state.answer} question = {this.state.question} /> 
      <div className='button-row'>
        <Button handleClick = {this.handleClick} label = {'Clear'} />
        <Button handleClick = {this.handleClick} label = {'Delete'} />
        <Button handleClick = {this.handleClick} label = {'.'} />
        <Button handleClick = {this.handleClick} label = {'/'} />
      </div>
      <div className='button-row'>
        <Button handleClick = {this.handleClick} label = {'7'} />
        <Button handleClick = {this.handleClick} label = {'8'} />
        <Button handleClick = {this.handleClick} label = {'9'} />
        <Button handleClick = {this.handleClick} label = {'*'} />
      </div>
      <div className='button-row'>
        <Button handleClick = {this.handleClick} label = {'4'} />
        <Button handleClick = {this.handleClick} label = {'5'} />
        <Button handleClick = {this.handleClick} label = {'6'} />
        <Button handleClick = {this.handleClick} label = {'-'} />
      </div>
      <div className='button-row'>
        <Button handleClick = {this.handleClick} label = {'1'} />
        <Button handleClick = {this.handleClick} label = {'2'} />
        <Button handleClick = {this.handleClick} label = {'3'} />
        <Button handleClick = {this.handleClick} label = {'+'} />
      </div>
      <div className='button-row'>
        <Button handleClick = {this.handleClick} label = {'0'} />
        <Button handleClick = {this.handleClick} label = {'('} />
        <Button handleClick = {this.handleClick} label = {')'} />
        <Button handleClick = {this.handleClick} label = {'='} />
      </div>
      </div>

      </div>
    );
  }
}

export default Calculator ;