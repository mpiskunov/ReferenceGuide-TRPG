import { Component, OnInit } from '@angular/core';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { Router } from '@angular/router';
import { TableBuilderComponent } from 'src/app/shared/interfaces/table-builder.interface';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { Glyph } from 'src/app/shared/model/glyph';

@Component({
  selector: 'app-glyphs-list',
  templateUrl: './glyphs-list.component.html',
  styleUrls: ['./glyphs-list.component.css'],
})
export class GlyphsListComponent extends TableBuilderComponent
  implements OnInit {
  columnsToDisplay: string[] = ['id', 'name', 'effect', 'weight', 'cost'];
  callBackUrl: string;
  endPoint: ApiEndPoint;
  glyphs: Glyph[];

  constructor(
    private witcherService: WitcherApiService,
    private router: Router
  ) {
    super();
    this.callBackUrl = 'Glyphs';
  }

  ngOnInit(): void {
    this.endPoint = ApiEndPoint.GLYPHS;

    this.witcherService.getAll<Glyph[]>(this.endPoint).subscribe({
      next: (Glyphs) => {
        // Set the weapons array.
        this.glyphs = Glyphs;
        this.generateTableBuilder<Glyph>(this.glyphs);
      },
      error: (err) => console.log(err),
    });
  }
}
