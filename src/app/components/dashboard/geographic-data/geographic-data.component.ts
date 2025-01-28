import { Component } from '@angular/core';
import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '../../../models/location.model';
// import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-geographic-data',
  standalone: true,
  templateUrl: './geographic-data.component.html',
  styleUrl: './geographic-data.component.scss'
})

export class GeographicDataComponent implements OnChanges {
  @Input() locations: Location[] = [];
  single: any[] = [];
  view: [number, number] = [350, 250];
  colorScheme: any = {
    domain: ['#9C27B0', '#FF9800', '#009688']
  };
  showLegend: boolean = true;
  showLabels: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
      if(changes['locations'] && this.locations){
            this.single = this.locations.map((location) => {
            return {
                name: location.name,
                value: location.count
            }
        })
      }

  }

}
