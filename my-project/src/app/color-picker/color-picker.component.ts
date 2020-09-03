import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  color = "#0909";
  constructor() { }

  ngOnInit(): void {
  }
  onchange(value){
    this.color = value;
  }

}
