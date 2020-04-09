import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from '../../../../providers/post-provider';

@Component({
  selector: 'app-tabs-detail',
  templateUrl: './tabs-detail.page.html',
  styleUrls: ['./tabs-detail.page.scss'],
})
export class TabsDetailPage implements OnInit {
  id: number;
  title: string;
  loc: string;
  desc: string;
  type: string;
  comp: string;

  idel:number;
  constructor(
    private actRoute: ActivatedRoute,
    private postPvdr: PostProvider,
    private router: Router,
    ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.title = data.title;
      this.desc = data.desc;
      this.loc = data.loc;
      this.type = data.type;
      this.comp = data.comp;
      console.log(data);
  	});
  }

  deljob(id){
    let body = {
      aksi : 'delete',
      job_id : id
    };

    this.postPvdr.postData(body, 'proses_api.php').subscribe(data => {
      this.router.navigate(['/jobs/tabs/job']);
    });
  }

  editjob(id, title, desc, loc, type, comp){
    this.router.navigate(['/jobs/tabs/addjob/' + id + '/' + title + '/' + desc + '/' + loc + '/' + type + '/' + comp]);

    // id, title, desc, loc, type, comp
  }

}
