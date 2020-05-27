import { Component, OnInit, Input } from '@angular/core';
import { MonsterSkill, MonsterStatistic } from 'src/app/shared/model/models';

@Component({
  selector: 'app-monster-skills',
  templateUrl: './monster-skills.component.html',
  styleUrls: ['./monster-skills.component.css'],
})
export class MonsterSkillsComponent implements OnInit {
  @Input() monSkills: Array<MonsterSkill>;
  @Input() monStats: Array<MonsterStatistic>;
  skillBaseArray: { [id: number]: number } = {};
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.monSkills.length; i++) {
      this.skillBaseArray[i] = this.monStats.find(
        (mon) => mon.statisticID == this.monSkills[i].skill.statisticID
      ).value;
      // console.log(this.skillBaseArray[i]);
    }
  }
}
