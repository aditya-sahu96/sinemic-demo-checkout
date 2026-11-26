// Type representing a single cart line item.
export type Item = { name: string; price: number; quantity: number };

// Returns the sum of price times quantity for every item.
export function subtotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Returns 10 percent of amount when amount is greater than 1000. Otherwise returns 0.
export function discount(amount: number): number {
  return amount > 1000 ? amount * 0.1 : 0;
}

// REQ-002: the total includes tax. Tax is not added yet. This is the known gap.
// Returns subtotal minus discount of the subtotal.
export function total(items: Item[]): number {
  const sub = subtotal(items);
  return sub - discount(sub);
}
