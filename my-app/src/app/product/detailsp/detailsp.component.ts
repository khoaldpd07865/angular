import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-detailsp',
  templateUrl: './detailsp.component.html',
  styleUrl: './detailsp.component.css'
})
export class DetailspComponent implements OnInit{
  // receivedData: any|object;
  product: any;
  id=0;
  constructor(private productService: ProductService,private route: ActivatedRoute) {}
  ngOnInit() {
    // this.productService.data$.subscribe(data => {
    //   this.receivedData = data;
    // });
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.product=this.productService.getProductById(this.id);
  }
}
