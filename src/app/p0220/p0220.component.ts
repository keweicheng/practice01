import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';
import { List } from '../model/list.model';

@Component({
  selector: 'app-p0220',
  templateUrl: './p0220.component.html',
  styleUrls: ['./p0220.component.scss']
})
export class P0220Component implements OnInit {
  list: List;
  postList: List = {
    //id
    name: '',
  };

  putList: List;
  constructor(
    public practiceService: PracticeService
  ) { }

  ngOnInit() {
    this.practiceService.getLists().subscribe(
      data => {
        console.log(data);
      },
      error => {
      },
      () => {
      }
    );

    this.practiceService.getList(1).subscribe( 
      data => {
        console.log(data);
        this.putList = data;
      },
      error => {
      },
      () => {
      }
    );
  }

  submitList() {
    this.practiceService.postList(this.postList).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
