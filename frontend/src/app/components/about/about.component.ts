import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  tasks = [];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(
        res => {
          this.tasks = res;
        },
        err => console.log(err)
      )
  }

}
