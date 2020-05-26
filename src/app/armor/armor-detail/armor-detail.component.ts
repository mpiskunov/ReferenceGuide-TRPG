import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { ArmorViewModel } from 'src/app/shared/model/models';

@Component({
  selector: 'app-armor-detail',
  templateUrl: './armor-detail.component.html',
  styleUrls: ['./armor-detail.component.css'],
})
export class ArmorDetailComponent implements OnInit {
  armorVm: ArmorViewModel;
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

      this.apiService
        .getSingularById<ArmorViewModel>(ApiEndPoint.ARMORS_COMPLETE, id)
        .subscribe({
          next: (armor) => {
            this.armorVm = armor;
          },
          error: (err) => console.log(err),
        });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + 'ArmorDashboard']);
  }
}
