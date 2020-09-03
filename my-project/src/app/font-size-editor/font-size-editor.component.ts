import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.scss']
})
export class FontSizeEditorComponent implements OnInit {

  fontSize = 20;
  constructor() { }

  ngOnInit(): void {
  }

  onchange(value){
    this.fontSize = value;
  }

}
