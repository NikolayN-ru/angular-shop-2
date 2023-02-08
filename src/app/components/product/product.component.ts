import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: IProducts;
  productSubscription!: Subscription;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.productSubscription = this.route.data.subscribe((data) => {
      this.product = data['data'];
    });
  }

  openDialog() {
    // let dialogConfig = new MatDialogConfig();
    // dialogConfig.poduct = 888;
  }

  test() {
    if (localStorage.getItem('product.data')) {
      console.log('storage - full');
    } else {
      console.log(this.product);
      localStorage.setItem('product.data', JSON.stringify(this.product));
    }
  }
}
