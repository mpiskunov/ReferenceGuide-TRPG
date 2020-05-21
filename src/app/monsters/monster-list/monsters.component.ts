import { Component, OnInit } from '@angular/core';
import { WitcherApiService } from '../../shared/api-service/witcher-api.service';
import { Router } from '@angular/router';
import { TableBuilderComponent } from '../../shared/interfaces/table-builder.interface';
import { Monster } from '../../shared/model/models';
import { ApiEndPoint } from '../../shared/api-service/api-endpoint';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css'],
})
export class MonsterListComponent extends TableBuilderComponent
  implements OnInit {
  callBackUrl: string = 'Monsters';
  apiEndpoint: ApiEndPoint = ApiEndPoint.MONSTERS;
  columnsToDisplay: string[] = [
    'id',
    'name',
    'armorValue',
    'organization',
    'monsterType',
  ];

  constructor(private apiService: WitcherApiService, private router: Router) {
    super();
    this.callBackUrl = this.router.url;
  }

  ngOnInit(): void {
    this.apiService.getAll<Monster[]>(this.apiEndpoint).subscribe({
      next: (monsters) => {
        this.generateTableBuilder<Monster>(monsters);
      },
    });
  }
}
