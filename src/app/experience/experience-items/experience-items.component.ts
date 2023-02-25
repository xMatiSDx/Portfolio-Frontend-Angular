import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/*------------------ Experience Items Service ------------------*/
import { ExperienceItemsService } from '../service/experience-items.service';
import { ExperienceEditModalComponent } from '../experience-edit-modal/experience-edit-modal.component';

/*------------------ Experience Interface ------------------*/
import { Experiences } from '../interface/experiences';

@Component({
  selector: 'app-experience-items',
  templateUrl: './experience-items.component.html',
  styleUrls: ['./experience-items.component.css']
})
export class ExperienceItemsComponent implements OnInit {

  experiences: Experiences[] = [];

  constructor(private expItemsService: ExperienceItemsService, private modalService: NgbModal) { }
  
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

  openExpEditModal() {
    const modalRef = this.modalService.open(ExperienceEditModalComponent);
	}

}
