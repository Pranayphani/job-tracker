import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobService } from '../../job.service';
@Component({
  selector: 'app-job-table',
  imports: [CommonModule],
  templateUrl: './job-table.component.html',
  styleUrl: './job-table.component.css',
})
export class JobTableComponent {
  @Input() applications: any[] = [];
  @Output() deleted = new EventEmitter<void>();

  constructor(private jobService: JobService) {}

  delete(id: string) {
    if (confirm('Are you sure to delete?')) {
      this.jobService.delete(id).subscribe(() => this.deleted.emit());
    }
  }
}
