import { Component, OnInit } from "@angular/core";
import { ListService } from "./list.service";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  pictures: any;
  constructor(private list_service: ListService) {}

  ngOnInit() {
    this.getPicturesList();
  }
  getPicturesList() {
    this.list_service.getPictures().subscribe(res => {
      console.log(res);
      this.pictures = res;
    });
  }
}
