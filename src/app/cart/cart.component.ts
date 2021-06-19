import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from './../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  chekOutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.chekOutForm.value);
    this.chekOutForm.reset();
  }

}
