import {Component} from '@angular/core';
import {AddComponent} from '../addcomponent/add.component';
import {SubComponent} from '../subcomponent/sub.component';
import {MulComponent} from '../mulcomponent/mul.component';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {


  textValue = 'initial value';
  // log = '';

  // logText(value: string): void {
  //   this.log += `Text changed to '${value}'\n`;
  // }


  box1Integer: number = 3;
  box2Integer: number = 10;

  box1Items: string[] = [];
  box2Items: string[] = [];
  public isShowAdd : boolean = false;
  public isShowSub : boolean = false;
  public isShowMul : boolean = false;
  // allowDropFunction(baseInteger: number): any {
  //     return (dragData: any) => dragData % baseInteger === 0;
  // }

  addTobox1Items($event: any) {
    console.log(" dd ==>",$event.dragData);
    if($event.dragData==1){
      this.isShowAdd = true;
    }
    if($event.dragData==2){
      this.isShowSub = true;
    }
    if($event.dragData==3){
      this.isShowMul = true;
    }
      //this.box1Items.push($event.dragData);
  }

  // addTobox2Items($event: any) {
  //   if($event.dragData==1){
  //     this.box2Items.push('<add>');
  //   }
  //     this.box2Items.push($event.dragData);
  // }
}

