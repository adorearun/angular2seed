import {Component,Input} from '@angular/core';

@Component({
  selector: 'mul',
  styleUrls: ['./mul.component.css'],
  templateUrl: './mul.component.html'
})
export class MulComponent {


    // public fixedValue: number = 20;
    // public downpayment1: number = 0;

    @Input() multiplier1: number;
    @Input() multiplier2: number;
}
