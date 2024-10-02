import { Injectable } from '@angular/core';
import { Package } from './models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartKey = 'shopping_cart';
  private readonly expiryKey = 'cart_expiry';
  private readonly expiryDuration = 60 * 60 * 1000;

  constructor() {
    this.checkExpiry();
  }

  private checkExpiry(): void {
    const expiry = localStorage.getItem(this.expiryKey);
    if (expiry && Date.now() > Number(expiry)) {
      this.clearCart();
    }
  }

  private updateExpiry(): void {
    const now = Date.now();
    const expiry = now + this.expiryDuration;
    localStorage.setItem(this.expiryKey, expiry.toString());
  }

  addToCart(pkg: Package): void {
    const cart = this.getCart();
    cart.push(pkg);
    this.saveCart(cart);
  }

  getCart(): Package[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  private saveCart(cart: Package[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.updateExpiry();
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
    localStorage.removeItem(this.expiryKey);
  }
}
