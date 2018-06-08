import {Component,Input} from '@angular/core';

@Component({
  selector: 'sub',
  styleUrls: ['./sub.component.css'],
  templateUrl: './sub.component.html'
})
export class SubComponent {


  

    @Input() firstnumber: number;
    @Input() secondnumber: number;
}

