import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { GeneralGear } from 'src/app/shared/model/models';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  generalGear: GeneralGear;
  callBackUrl: string;

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
        .getSingularById<GeneralGear>(ApiEndPoint.GENERAL_GEAR, id)
        .subscribe({
          next: (generalGear) => {
            this.generalGear = generalGear;
          },
          error: (err) => console.log(err),
        });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + 'GeneralGearDashboard']);
  }
}
