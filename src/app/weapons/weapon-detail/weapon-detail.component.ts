import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { WeaponViewModel } from 'src/app/shared/model/models';

@Component({
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.css'],
})
export class WeaponDetailComponent implements OnInit {
  public completedWeapon: WeaponViewModel;
  public callBackUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: WitcherApiService
  ) {
    let url = route.url.subscribe({
      next: (url) => {
        this.callBackUrl = url[0].path;
      },
    });
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;

      this.apiService
        .getSingularById<WeaponViewModel>(ApiEndPoint.WEAPONS_COMPLETE, id)
        .subscribe({
          next: (weapon) => {
            this.completedWeapon = weapon;
          },
          error: (err) => console.log(err),
        });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + this.callBackUrl]);
  }
}
