import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimensions',
  standalone: true,
  imports: [],
  templateUrl: './dimensions.component.html',
  styleUrl: './dimensions.component.css'
})
export class DimensionsComponent implements OnInit {
  
    public title: string;

    constructor(){
      this.title = 'Dimensions'
    }

    ngOnInit(): void {
        console.log('Componente de dimsions')
    }
}
