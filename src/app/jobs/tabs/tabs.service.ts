import { Injectable } from '@angular/core';
import { Jobs } from './tabs.model';  

@Injectable({
  providedIn: 'root'
})

export class TabsService{

    private jobs: Jobs[] = [
        new Jobs(
            'j1',
            'PT. WireCard',
            'Web Developer',
            'Trio Gili merupakan tempat...',
            'Full Time',
            'Jakarta, Indonesia'
          ),
        new Jobs(
            'j2',
            'PT. WireCard',
            "Java Developer",
            'A romantic Jobs in Paris!',
            'Intership',
            'Surabaya, Indonesia'
          ),
        new Jobs(
            'j3',
            'PT. WireCard',
            'Back-end Web Developer',
            'Not your average city trip!',
            'Remote',
            'Jakarta, Indonesia'
          )
        ];
        
    get Jobs(){
        return [...this.jobs]
    }

    getJob(jobId: string){
      return {...this.jobs.find(jobss => {
        return jobss.id === jobId;
      })};
    }
  //   getPlace(tabsId: string){
  //     return {...this.place.find(places => {
  //       return places.id === tabsId;
  //     })};
  // }
        
}