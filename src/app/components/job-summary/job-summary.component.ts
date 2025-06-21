import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-summary',
  imports: [CommonModule],
  templateUrl: './job-summary.component.html',
  styleUrl: './job-summary.component.css',
})
export class JobSummaryComponent {
  @Input() applications: any = [];
}
