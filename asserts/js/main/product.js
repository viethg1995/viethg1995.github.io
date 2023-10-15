/**
 * Show product
 */
const showProduct = () => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  let productShow = "";
  products.forEach((product, index) => {
    productShow += `
      <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>
          <button>Sửa</button>
          <button>Xóa</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("tbody-show-product").innerHTML = productShow;
};

const addProduct = () => {
  const productName = document.getElementById("product-name").value;
  const productPrice = document.getElementById("price").value;
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = {
    name: productName,
    price: productPrice,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  showProduct();
};
