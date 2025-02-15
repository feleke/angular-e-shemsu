import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
      <div class="p-t flex flex-col gap-4">
      <h2 class="text-2xl"> Shopping cart </h2>

      @for( product of cartService.cart(); track product.id){
      <app-cart-item [item]="product"/>
      }
      <app-order-summary />
  </div>
      `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService)
}
