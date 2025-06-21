import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobFormComponent } from './components/job-form/job-form.component';
import { JobTableComponent } from './components/job-table/job-table.component';
import { JobSummaryComponent } from './components/job-summary/job-summary.component';
import { JobService } from './job.service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    JobFormComponent,
    JobTableComponent,
    JobSummaryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';
  applications: any[] = [];
  selectedApplication: any = null;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.jobService.getAll().subscribe((data) => (this.applications = data));
  }

  onEdit(app: any) {
    this.selectedApplication = app;
  }
}
