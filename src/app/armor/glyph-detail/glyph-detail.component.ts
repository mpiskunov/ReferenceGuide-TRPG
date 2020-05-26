import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { Glyph } from 'src/app/shared/model/glyph';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';

@Component({
  selector: 'app-glyph-detail',
  templateUrl: './glyph-detail.component.html',
  styleUrls: ['./glyph-detail.component.css'],
})
export class GlyphDetailComponent implements OnInit {
  glyph: Glyph;
  callBackUrl: string = 'ArmorDashboard';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: WitcherApiService
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;

      this.apiService.getSingularById<Glyph>(ApiEndPoint.GLYPHS, id).subscribe({
        next: (glyph) => {
          this.glyph = glyph;
        },
        error: (err) => console.log(err),
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + this.callBackUrl]);
  }
}
