import { Component, OnInit } from '@angular/core';
import { Rune } from 'src/app/shared/model/rune';
import { ActivatedRoute, Router } from '@angular/router';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';

@Component({
  selector: 'app-rune-detail',
  templateUrl: './rune-detail.component.html',
  styleUrls: ['./rune-detail.component.css'],
})
export class RuneDetailComponent implements OnInit {
  public rune: Rune;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: WitcherApiService
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      const id = +param;

      this.apiService.getSingularById<Rune>(ApiEndPoint.RUNES, id).subscribe({
        next: (rune) => {
          debugger;
          this.rune = rune;
        },
        error: (err) => console.log(err),
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + 'WeaponDashboard']);
  }
}
