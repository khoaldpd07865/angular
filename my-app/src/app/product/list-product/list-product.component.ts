import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  @Input() all: any = {};
  @Input() t: number = 0;

  constructor(private router: Router, private productService: ProductService) {}

  sendDataToChild(dataToSend: number) {
    this.router.navigate(['/detail', dataToSend]);
  }

  tang() {
    if (this.all.quanlity < 99) {
      this.all.quanlity++;
      this.all.total = this.all.quanlity * this.all.current_price;
    }
  }

  giam() {
    if (this.all.quanlity > 0) {
      this.all.quanlity--;
      this.all.total = this.all.quanlity * this.all.current_price;
    }
  }

  tuNhap() {
    this.all.total = this.all.quanlity * this.all.current_price;
  }

  addToCart() {
    // Constructing the message to display in the alert
    const message = `Đã thêm vào giỏ hàng:\n\nTên sản phẩm: ${this.all.name}\nTổng tiền: ${this.all.total} ${this.all.price_unit}`;

    // Displaying the alert
    alert(message);
  }
}
