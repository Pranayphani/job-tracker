import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../job.service';
@Component({
  selector: 'app-job-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css',
})
export class JobFormComponent {
  @Output() saved = new EventEmitter<void>();

  form: any = {
    firstName: '',
    lastName: '',
    mail: '',
    mobileNo: '',
    skills: [],
    projects: {},
  };

  skillsInput = '';

  constructor(private jobService: JobService) {}

  submitForm() {
    this.form.skills = this.skillsInput.split(',').map((s) => s.trim());
    this.jobService.create(this.form).subscribe(() => {
      this.saved.emit();
      this.reset();
    });
  }

  reset() {
    this.form = {
      firstName: '',
      lastName: '',
      mail: '',
      mobileNo: '',
      skills: [],
      projects: {},
    };
    this.skillsInput = '';
  }
}
