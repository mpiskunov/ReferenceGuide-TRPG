import { Component, OnInit } from '@angular/core';
import { TableBuilderComponent } from 'src/app/shared/interfaces/table-builder.interface';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { Router } from '@angular/router';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { IAmmunition } from '../interfaces/ammunition';

@Component({
  selector: 'app-ammunition-list',
  templateUrl: './ammunition-list.component.html',
  styleUrls: ['./ammunition-list.component.css']
})

export class AmmunitionsComponent extends TableBuilderComponent implements OnInit {

  //weapons:IWeapon[] = [] ;
  columnsToDisplay: string[] = ['id', 'name', 'attackType', 'defaultReliability', 'concealment', 'weight', 'cost'];
  endPoint: ApiEndPoint;
  callBackUrl: string;

  constructor(private witcherService: WitcherApiService, private router: Router) {
    super();
    this.callBackUrl = router.url;
  }

  ngOnInit(): void {
    this.endPoint = ApiEndPoint.AMMO;

    this.witcherService.getAll<IAmmunition[]>(this.endPoint).subscribe({
      next: ammo => {
        this.generateTableBuilder<IAmmunition>(ammo);
      },
      error: err => console.log(err)
    });
  }

}
