import { Component } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css']
})
export class ManComponent {
ngOnInit() {

}
minValue: number = 18;
  maxValue: number = 80;
  options: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "" + value;
        case LabelType.High:
          return  value+" yo";
        default:
          return "" ;
      }
    }
  };

  heightminValue: number = 38;
  heightmaxValue: number = 245;
  height: Options = {
    floor: 0,
    ceil: 300,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value +"";
        case LabelType.High:
          return  value + " cm";
        default:
          return "";
      }
    }
  };
  weightminValue: number = 45;
  weightmaxValue: number = 138;
  weight: Options = {
    floor: 0,
    ceil: 200,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value +"";
        case LabelType.High:
          return  value + " kg";
        default:
          return "";
      }
    }
  };
}
