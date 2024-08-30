import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  constructor(private productService: ProductService) { }

  allsp: any;

  ngOnInit(): void {
    this.allsp = this.productService.getAllProducts();
  }
  updateAll(newAllValue: any, index: number) {
    this.allsp[index] = newAllValue;
  }


  getTotal(): number {
    let total = 0;
    for (const product of this.allsp) {
      total += product.total; // Giả sử total của mỗi sản phẩm đã được tính trước đó
    }
    return total;
  }
}
