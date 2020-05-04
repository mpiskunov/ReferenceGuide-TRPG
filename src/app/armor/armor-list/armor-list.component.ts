import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TableBuilderComponent} from 'src/app/shared/interfaces/table-builder.interface';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { IArmor } from './armors';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { ITableDetail } from 'src/app/shared/tables/table-detail';


@Component({
  selector: 'app-armor-list',
  templateUrl: './armor-list.component.html',
  styleUrls: ['./armor-list.component.css']
})
export class ArmorListComponent extends TableBuilderComponent implements OnInit {

  armors : IArmor[] = [];
  columnsToDisplay: string[] = ['id','name', 'defaultReiability','stoppingPower',
  'availability', 'weight','cost']
  endPoint: ApiEndPoint;
  itemsForGenTable: ITableDetail[] = [];
  callBackUrl: string;

  constructor(private witcherService: WitcherApiService, private router:Router) { 
    super();
    this.callBackUrl = router.url;
  }

  ngOnInit(): void {
    this.endPoint = ApiEndPoint.ARMORS;

    this.witcherService.getAll<IArmor[]>(this.endPoint).subscribe({
      next: armors => {
        // Set the armors array.
        this.armors = armors;
        this.generateTableBuilder<IArmor>(this.armors);
      },
      error: err => console.log(err)
    });
  }

}
