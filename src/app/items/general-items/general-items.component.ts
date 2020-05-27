import { Component, OnInit, Input } from '@angular/core';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { ITableDetail } from 'src/app/shared/tables/table-detail';
import { TableBuilderComponent } from 'src/app/shared/interfaces/table-builder.interface';
import { ActivatedRoute } from '@angular/router';
import { GeneralGear } from 'src/app/shared/model/models';

@Component({
  selector: 'app-general-items-list',
  templateUrl: './general-items.component.html',
  styleUrls: ['./general-items.component.css'],
})
export class GeneralItemsComponent extends TableBuilderComponent
  implements OnInit {
  generalGearList: GeneralGear[];
  columnsToDisplay: string[] = ['id', 'name', 'weight', 'cost'];
  itemsForGenTable: ITableDetail[] = [];
  apiEndpoint: ApiEndPoint = ApiEndPoint.GENERAL_GEAR;
  callBackUrl: string;

  @Input() generalGearClassification: string;
  @Input() displayWeight: boolean = true;

  constructor(
    private apiService: WitcherApiService,
    private route: ActivatedRoute
  ) {
    super();

    let url = route.url.subscribe({
      next: (url) => {
        //// ;
        this.callBackUrl = 'GeneralGears';
      },
    });
  }

  ngOnInit(): void {
    this.apiService.getAll<GeneralGear[]>(this.apiEndpoint).subscribe({
      next: (gears) => {
        this.generalGearList = gears.filter(
          (gear) =>
            gear.generalGearClassification == this.generalGearClassification
        );

        if (!this.displayWeight) {
          const index = this.columnsToDisplay.indexOf('weight');
          if (index > -1) this.columnsToDisplay.splice(index, 1);
        }
        this.generateTableBuilder<GeneralGear>(this.generalGearList);
      },
    });
  }
}
