import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsService } from '../tabs.service';
import { Jobs } from '../tabs.model';

@Component({
  selector: 'app-tabs-detail',
  templateUrl: './tabs-detail.page.html',
  styleUrls: ['./tabs-detail.page.scss'],
})
export class TabsDetailPage implements OnInit {
  loadJob: Jobs;
  constructor(
    private actRoute: ActivatedRoute,
    private tabsService: TabsService,
    private router: Router) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('jobsId')){
        this.router.navigate(['/tabs']);
        return;
      }

      const jobsId = paramMap.get('jobsId');
      this.loadJob = this.tabsService.getJob(jobsId);
    });
  }

}
