import { Component, OnInit, Input } from '@angular/core';
import { MonsterStatistic } from 'src/app/shared/model/models';

@Component({
  selector: 'app-monster-statistics',
  templateUrl: './monster-statistics.component.html',
  styleUrls: ['./monster-statistics.component.css'],
})
export class MonsterStatisticsComponent implements OnInit {
  @Input() monStats: Array<MonsterStatistic>;
  constructor() {}

  ngOnInit(): void {}
}
