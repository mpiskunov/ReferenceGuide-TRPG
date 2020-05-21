import { Component, OnInit } from '@angular/core';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { Router } from '@angular/router';
import { TableBuilderComponent } from 'src/app/shared/interfaces/table-builder.interface';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { Bomb } from 'src/app/shared/model/bomb';

@Component({
  selector: 'app-bomb-list',
  templateUrl: './bomb-list.component.html',
  styleUrls: ['./bomb-list.component.css'],
})
export class BombsComponent extends TableBuilderComponent implements OnInit {
  columnsToDisplay: string[] = [
    'id',
    'name',
    'attackType',
    'range',
    'damage',
    'weight',
    'cost',
  ];
  endPoint: ApiEndPoint;
  callBackUrl: string;

  constructor(
    private witcherService: WitcherApiService,
    private router: Router
  ) {
    super();
    this.callBackUrl = router.url;
  }

  ngOnInit(): void {
    this.endPoint = ApiEndPoint.BOMBS;

    this.witcherService.getAll<Bomb[]>(this.endPoint).subscribe({
      next: (bombs) => {
        this.generateTableBuilder<Bomb>(bombs);
      },
      error: (err) => console.log(err),
    });
  }
}
