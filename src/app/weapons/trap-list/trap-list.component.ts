import { Component, OnInit } from '@angular/core';
import { TableBuilderComponent } from 'src/app/shared/interfaces/table-builder.interface';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { Router } from '@angular/router';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { ITrap } from '../interfaces/trap';

@Component({
  selector: 'app-trap-list',
  templateUrl: './trap-list.component.html',
  styleUrls: ['./trap-list.component.css']
})

export class TrapsComponent extends TableBuilderComponent implements OnInit {

  //weapons:IWeapon[] = [] ;
  columnsToDisplay: string[] = ['id', 'name', 'type', 'range', 'damage', 'weight', 'cost'];
  endPoint: ApiEndPoint;
  callBackUrl: string;

  constructor(private witcherService: WitcherApiService, private router: Router) {
    super();
    this.callBackUrl = router.url;
  }

  ngOnInit(): void {
    this.endPoint = ApiEndPoint.TRAPS;

    this.witcherService.getAll<ITrap[]>(this.endPoint).subscribe({
      next: traps => {
        this.generateTableBuilder<ITrap>(traps);
      },
      error: err => console.log(err)
    });
  }

}
