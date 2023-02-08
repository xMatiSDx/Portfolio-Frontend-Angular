import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public isCollapsed = true;
  experienceForm:FormGroup;

  constructor(private formBuilder: FormBuilder, /*private expService: ExperienceService*/) {
    this.experienceForm= this.formBuilder.group({
      company:['',[Validators.required, Validators.minLength(4)]],
      from:['',[Validators.required, ]],
      to:['',[Validators.required, ]],
      position: ['',[Validators.required, ]],
      description: ['',[Validators.required, ]],
   })
  }

  get company(){
    return this.experienceForm.get("company");
  }
 
  get email(){
   return this.experienceForm.get("email");
  }

  get companyValid(){
    return this.company?.touched && !this.company?.valid;
  }

  get emailValid() {
    return this.email?.touched && !this.email?.valid;
  }

  changePicture() {
    console.log('Change Picture!')
  }

  ngOnInit(): void {
  }

  // addExp(exp: Experiences) {
  //   this.info.addExp(exp).subscribe((exp)=>(this.experiences.push(exp)))
  //   console.log(this.experiences)
  //   }

}
