import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  number1: number;
  number2: number;
  operator = '+';
  output: number;
  constructor() { }

  ngOnInit(): void {
  }


  // onFirstChange(value){
  //   this.number1 = Number(value);
  // }

  // onOperatorChange(value){
  //   this.operator = value;
  // }

  // onSecondChange(value){
  //   this.number2 = Number(value);
  // }

  calculator(){
    this.output = eval(this.number1 + this.operator + this.number2);
  }


}
