import { Component, OnInit } from '@angular/core';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { Router } from '@angular/router';
import { TableBuilderComponent } from 'src/app/shared/interfaces/table-builder.interface';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { Rune } from 'src/app/shared/model/rune';

@Component({
  selector: 'app-runes-list',
  templateUrl: './runes-list.component.html',
  styleUrls: ['./runes-list.component.css'],
})
export class RunesListComponent extends TableBuilderComponent
  implements OnInit {
  columnsToDisplay: string[] = ['id', 'name', 'effect', 'weight', 'cost'];
  endPoint: ApiEndPoint;
  callBackUrl: string = 'Runes';

  constructor(
    private witcherService: WitcherApiService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.endPoint = ApiEndPoint.RUNES;

    this.witcherService.getAll<Rune[]>(this.endPoint).subscribe({
      next: (runes) => {
        this.generateTableBuilder<Rune>(runes);
      },
      error: (err) => console.log(err),
    });
  }
}
