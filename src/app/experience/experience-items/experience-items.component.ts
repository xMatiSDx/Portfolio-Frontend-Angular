import { Component, OnInit } from '@angular/core';

/*------------------ Experience Service ------------------*/
import { ExperienceService } from '../service/experience.service';

/*------------------ Experience Interface ------------------*/
import { Experiences } from '../interface/experiences';

@Component({
  selector: 'app-experience-items',
  templateUrl: './experience-items.component.html',
  styleUrls: ['./experience-items.component.css']
})
export class ExperienceItemsComponent implements OnInit {

  experiences: Experiences[] = [];

  constructor(private expService:ExperienceService) { }
  
  editContent() {
    console.log('Edit!')
  }

  changePicture() {
    console.log('Change Picture!')
  }

  ngOnInit(): void {
    this.expService.getExp().subscribe((data) => {
    this.experiences = data;
    })
  }

}
