import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/modules/base/services/logging.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.loggingService.statusChange('Test log')
  }

}
