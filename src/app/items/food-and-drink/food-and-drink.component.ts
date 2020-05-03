import { Component, OnInit } from '@angular/core';
import { TableBuilderComponent } from 'src/app/shared/interfaces/table-builder.interface';
import { IGeneralGear } from '../general-items/interfaces/general-gear';
import { ITableDetail } from 'src/app/shared/tables/table-detail';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-and-drink',
  templateUrl: './food-and-drink.component.html',
  styleUrls: ['./food-and-drink.component.css']
})
export class FoodAndDrinkComponent  extends TableBuilderComponent implements OnInit {

  generalGearList:IGeneralGear[];
  columnsToDisplay: string[] = ['id', 'name', 'weight', 'cost'];
  itemsForGenTable: ITableDetail[] = [];
  apiEndpoint: ApiEndPoint = ApiEndPoint.GENERAL_GEAR;
  callBackUrl: string;

  constructor(private apiService: WitcherApiService, private router: Router) {
    super();
    this.callBackUrl = this.router.url;
    console.log(this.callBackUrl);
  }

  ngOnInit(): void {
    this.apiService.getAll<IGeneralGear[]>(this.apiEndpoint).subscribe({
      next: gears => {
        gears = gears.filter(gear => gear.generalGearClassification == "FoodAndDrink");
        this.generalGearList = gears;
        this.generateTableBuilder<IGeneralGear>(this.generalGearList);
      }
    });
  }

}
