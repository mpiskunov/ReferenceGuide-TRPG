import { Component, OnInit, Input } from '@angular/core';
import { MonsterDerivedStatistic } from 'src/app/shared/model/models';

@Component({
  selector: 'app-monster-derived-statistics',
  templateUrl: './monster-derived-statistics.component.html',
  styleUrls: ['./monster-derived-statistics.component.css'],
})
export class MonsterDerivedStatisticsComponent implements OnInit {
  @Input() derivedStats: Array<MonsterDerivedStatistic>;
  constructor() {}

  ngOnInit(): void {}
}
