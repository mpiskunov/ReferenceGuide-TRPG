import { Component, OnInit } from '@angular/core';
import { IWeapon } from '../interfaces/weapons';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { TableBuilderComponent } from 'src/app/shared/interfaces/table-builder.interface';
import { Router } from '@angular/router';

@Component({
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css'],
})
export class WeaponListComponent extends TableBuilderComponent implements OnInit {

  weapons:IWeapon[] = [] ;
  columnsToDisplay: string[] = ['id', 'name', 'attackType', 'weaponAccuracy', 'damage', 'defaultReliability', 'weight', 'cost'];
  endPoint: ApiEndPoint;
  callBackUrl: string;

  constructor(private witcherService: WitcherApiService, private router: Router) {
    super();
    this.callBackUrl = router.url;
  }

  // Use this method when calling Weapon service.
  ngOnInit(): void {

    this.endPoint = ApiEndPoint.WEAPONS;

    this.witcherService.getAll<IWeapon[]>(this.endPoint).subscribe({
      next: weapons => {
        // Set the weapons array.
        this.weapons = weapons;
        this.generateTableBuilder<IWeapon>(this.weapons);
      },
      error: err => console.log(err)
    });
  }


}