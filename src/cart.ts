/**
 * NÃO ALTERAR ESSE ARQUIVO, APENAS PARA CONSULTA
 */

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface NotificationService {
  notify: (product: Product) => void;
}

export class Cart {
  private items: Product[] = [];
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  addItem(product: Product): void {
    this.items.push(product);
    this.notificationService.notify(product);
  }

  removeItem(productId: number): void {
    this.items = this.items.filter(item => item.id !== productId);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  clearCart(): void {
    this.items = [];
  }

  getItems(): Product[] {
    return [...this.items];
  }
}
