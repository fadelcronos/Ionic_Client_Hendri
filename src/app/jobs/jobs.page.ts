import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  title = 'job'

  onChangePages = (name) =>{
    this.title=name;
    console.log(name);
  }
  constructor() { }

  ngOnInit() {
  }

}
