import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res =>{
      console.log(res)
    })
  }

}
