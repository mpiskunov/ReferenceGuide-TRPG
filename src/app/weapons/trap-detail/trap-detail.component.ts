import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { TrapViewModel } from 'src/app/shared/model/models';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';

@Component({
  selector: 'app-trap-detail',
  templateUrl: './trap-detail.component.html',
  styleUrls: ['./trap-detail.component.css'],
})
export class TrapDetailComponent implements OnInit {
  public trapVM: TrapViewModel;

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
        .getSingularById<TrapViewModel>(ApiEndPoint.TRAPS_COMPLETE, id)
        .subscribe({
          next: (trap) => {
            // ;
            this.trapVM = trap;
          },
          error: (err) => console.log(err),
        });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + 'WeaponDashboard']);
  }
}
