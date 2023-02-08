import { Component, OnInit } from '@angular/core';

/*------------------ Experience Service ------------------*/
import { ExperienceItemsService } from '../service/experience-items.service';

/*------------------ Experience Interface ------------------*/
import { Experiences } from '../interface/experiences';

@Component({
  selector: 'app-experience-items',
  templateUrl: './experience-items.component.html',
  styleUrls: ['./experience-items.component.css']
})
export class ExperienceItemsComponent implements OnInit {

  experiences: Experiences[] = [];

  constructor(private expItemsService: ExperienceItemsService) { }
  
  editContent() {
    console.log('Edit!')
  }

  changePicture() {
    console.log('Change Picture!')
  }

  ngOnInit(): void {
    this.expItemsService.getExp().subscribe((exp) => {
    this.experiences = exp;
    })
  }

}
