import { describe, it, expect } from "vitest";
import { subtotal, discount, total } from "../src/checkout";

describe("checkout", () => {
  const cart = [
    { name: "Keyboard", price: 500, quantity: 1 },
    { name: "Mouse", price: 300, quantity: 2 },
  ];

  it("subtotal is 1100", () => {
    expect(subtotal(cart)).toBe(1100);
  });

  it("discount(1100) is 110", () => {
    expect(discount(1100)).toBe(110);
  });

  it("discount(1000) is 0", () => {
    expect(discount(1000)).toBe(0);
  });

  it("discount(999) is 0", () => {
    expect(discount(999)).toBe(0);
  });

  it("total is 990", () => {
    expect(total(cart)).toBe(990);
  });
});
