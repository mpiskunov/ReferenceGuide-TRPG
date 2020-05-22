import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';
import { BombViewModel } from 'src/app/shared/model/models';

@Component({
  selector: 'app-bomb-detail',
  templateUrl: './bomb-detail.component.html',
  styleUrls: ['./bomb-detail.component.css'],
})
export class BombDetailComponent implements OnInit {
  public bombVM: BombViewModel;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: WitcherApiService
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      const id = +param;

      this.apiService.getSingularById<BombViewModel>(ApiEndPoint.BOMBS_COMPLETE, id).subscribe({
        next: (bomb) => {
          this.bombVM = bomb;
        },
        error: (err) => console.log(err),
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + 'WeaponDashboard']);
  }
}
