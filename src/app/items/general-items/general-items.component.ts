import { Component, OnInit } from '@angular/core';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { ITableDetail } from 'src/app/shared/tables/table-detail';
import { TableBuilderComponent } from 'src/app/shared/interfaces/table-builder.interface';
import { ActivatedRoute } from '@angular/router';
import { GeneralGear } from 'src/app/shared/model/models';

@Component({
  templateUrl: './general-items.component.html',
  styleUrls: ['./general-items.component.css']
})
export class GeneralItemsComponent extends TableBuilderComponent implements OnInit  {

  generalGearList:GeneralGear[];
  columnsToDisplay: string[] = ['id', 'name', 'weight', 'cost',  'generalGearClassification'];
  itemsForGenTable: ITableDetail[] = [];
  apiEndpoint: ApiEndPoint = ApiEndPoint.GENERAL_GEAR;
  callBackUrl: string;

  constructor(private apiService: WitcherApiService, private route: ActivatedRoute) {
    super();

    let url = route.url.subscribe({
      next: url => {
        //debugger;
        this.callBackUrl = url[0].path;
      }
    });
    
   }

  ngOnInit(): void {
    this.apiService.getAll<GeneralGear[]>(this.apiEndpoint).subscribe({
      next: gears => {
        this.generalGearList = gears;
        this.generateTableBuilder<GeneralGear>(this.generalGearList);
      }
    });
  }

}
