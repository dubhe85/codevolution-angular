import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    
  <h1> ngIf inline directive   </h1>
  <h2 *ngIf="displayName; else elseBlock">
    Codevolution
    </h2>
    
    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>
    
    <br/>
    <hr/>
    <h1> 2nd ngIf directive   </h1>
    
    <div *ngIf="displayName2; then thenBlock2; else elseBlock2"></div>
    
    <ng-template #thenBlock2>
      <h2>Codevolution</h2>
    </ng-template>
    
    <ng-template #elseBlock2>
      <h2>Hidden</h2>
    </ng-template>
    <hr/>

    <h1> ngSwitch directive</h1>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>You picked no accepted color</div>
    </div>

    <hr/>
    <h1> ngFor directive</h1>
    <div *ngFor="let color of colors; index as i; odd as o">
        <h2>Index: {{i}} -- Odd: {{o}} -- {{color}}</h2>
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = false;
  public displayName2 = false;
  public color = "01";

  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

}
