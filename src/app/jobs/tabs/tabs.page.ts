import { Component, OnInit } from '@angular/core';
import { TabsService } from './tabs.service';
import { Jobs } from './tabs.model';
import { PostProvider } from '../../../providers/post-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  jobss: any = [];

  constructor(private tabsService: TabsService, private postprovider: PostProvider,
    private router: Router) { }

  ngOnInit() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
      };

      this.postprovider.postData(body, 'proses_api.php').subscribe(data => {
        for(let jobs of data.result){
          this.jobss.push(jobs);
          console.log(jobs);
        }
        resolve(true);
      });
    });
  }
  ionViewWillEnter(){
    this.jobss = [];
    this.ngOnInit();
  }

  viewjob(id, title, desc, type, loc, comp){
    this.router.navigate(['jobs/tabs/job/job-detail/'+ id + '/' + title + '/' + desc + '/' + type + '/' + loc + '/' + comp])
  }

}
