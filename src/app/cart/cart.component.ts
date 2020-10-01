import { Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartservice: CartService,
    private formbuilder: FormBuilder
    ) {
      this.checkoutForm = this.formbuilder.group({
        name:'',
        address:'',
      })
   }

  ngOnInit() {
    this.items = this.cartservice.getItems();
  }
  onSubmit(customerData) {
    this.checkoutForm.reset();
    this.items = this.cartservice.clearCart();
    console.warn('Your order has been submitted', customerData);
  }

}