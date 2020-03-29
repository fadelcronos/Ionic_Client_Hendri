import { Component, OnInit } from '@angular/core';
import { TabsService } from './tabs.service';
import { Jobs } from './tabs.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  Jobs: Jobs[]

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.Jobs = this.tabsService.Jobs;
  }

}
