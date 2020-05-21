import { Component, OnInit } from '@angular/core';
import { MonsterViewModel } from 'src/app/shared/model/models';
import { ActivatedRoute, Router } from '@angular/router';
import { WitcherApiService } from 'src/app/shared/api-service/witcher-api.service';
import { ApiEndPoint } from 'src/app/shared/api-service/api-endpoint';

@Component({
  selector: 'app-monster-details',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css'],
})
export class MonsterDetailComponent implements OnInit {
  monsterViewModel: MonsterViewModel;
  callBackUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private apiService: WitcherApiService) {
    let url = route.url.subscribe({
      next: url => {
        this.callBackUrl = url[0].path;
      }
    });
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;

      this.apiService.getSingularById<MonsterViewModel>(ApiEndPoint.MONSTERS_COMPLETE, id).subscribe({
        next: monsterComplete => {
          this.monsterViewModel = monsterComplete;
        },
        error: err => console.log(err)
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/' + this.callBackUrl]);
  }
}
