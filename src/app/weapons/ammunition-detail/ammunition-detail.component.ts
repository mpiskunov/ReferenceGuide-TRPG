import { Component, OnInit } from '@angular/core';
import { AmmunitionViewModel } from 'src/app/shared/model/models';
import { ActivatedRoute, Router } from '@angular/router';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';

@Component({
  selector: 'app-ammunition-detail',
  templateUrl: './ammunition-detail.component.html',
  styleUrls: ['./ammunition-detail.component.css'],
})
export class AmmunitionDetailComponent implements OnInit {
  public ammoVM: AmmunitionViewModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: WitcherApiService
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      const id = +param;

      this.apiService
        .getSingularById<AmmunitionViewModel>(ApiEndPoint.AMMO_COMPLETE, id)
        .subscribe({
          next: (ammo) => {
            debugger;
            this.ammoVM = ammo;
          },
          error: (err) => console.log(err),
        });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + 'WeaponDashboard']);
  }
}
