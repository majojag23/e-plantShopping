// Total del carrito: suma precio por cantidad de cada producto.
export function total(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
