import {Component,Input} from '@angular/core';

@Component({
  selector: 'add',
  styleUrls: ['./add.component.css'],
  templateUrl: './add.component.html'
})
export class AddComponent {


    // public fixedValue: number = 20;
    // public downpayment1: number = 0;

    @Input() fixedValue: number;
    @Input() downpayment1: number;
}

