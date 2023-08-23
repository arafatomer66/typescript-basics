import { Component } from '@angular/core';

@Component({
  selector: 'app-typeassertion',
  templateUrl: './typeassertion.component.html',
  styleUrls: ['./typeassertion.component.css']
})
export class TypeassertionComponent {
    myVariable: any = 'Hello';
    length: number = (<string>this.myVariable).length;


    // myVariable2: string = '100';
    // fiveHundred: number = (this.myVariable2 as number) * 5;
}
