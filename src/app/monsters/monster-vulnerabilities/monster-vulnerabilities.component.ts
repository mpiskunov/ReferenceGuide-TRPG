import { Component, OnInit, Input } from '@angular/core';
import { MonsterVulnerability } from 'src/app/shared/model/models';

@Component({
  selector: 'app-monster-vulnerabilities',
  templateUrl: './monster-vulnerabilities.component.html',
  styleUrls: ['./monster-vulnerabilities.component.css'],
})
export class MonsterVulnerabilitiesComponent implements OnInit {
  @Input() monsterVulns: Array<MonsterVulnerability>;
  constructor() {}

  ngOnInit(): void {}
}
