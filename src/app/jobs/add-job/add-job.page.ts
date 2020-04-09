import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.page.html',
  styleUrls: ['./add-job.page.scss'],
})
export class AddJobPage implements OnInit {
  id: number;
  job_title: string = "";
  job_type: string = "";
  job_desc: string = "";
  job_company: string = "";
  job_loc: string = "";
  
  constructor(
    private postPvdr: PostProvider,
  	private router: Router,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
  		this.id = data.id;
  		this.job_title = data.title;
      this.job_desc = data.desc;
      this.job_type = data.type;
      this.job_company = data.comp;
      this.job_loc = data.loc;  
      
  		console.log(data);
  	});
  }

  createjobs(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'addjob',
  			job_title: this.job_title,
        job_company: this.job_company,
        job_desc: this.job_desc,
        job_type: this.job_type,
        job_loc: this.job_loc,
  		};

  		this.postPvdr.postData(body, 'proses_api.php').subscribe(data => {
        var alertmsg = data.msg;
        if(data.success){
          this.router.navigate(['/jobs/tabs/job']);
          console.log('OK');

        }else{
          console.log("Nope")
        }
  		});
  	});

  }

  updatejob(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'update',
  			job_id : this.id,
  			job_desc : this.job_desc,
        job_title : this.job_title,
        job_loc : this.job_loc,
        job_company : this.job_company,
        job_type : this.job_type
  		};

  		this.postPvdr.postData(body, 'proses_api.php').subscribe(data => {
  			this.router.navigate(['/jobs/tabs/job']);
  			console.log('OK');
  		});
  	});

  }

}
