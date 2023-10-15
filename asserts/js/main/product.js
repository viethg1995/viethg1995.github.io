const getProducts = () => {
  return JSON.parse(localStorage.getItem("products")) || [];
};

/**
 * Show product
 */
const showProduct = () => {
  const products = getProducts();
  let productShow = "";
  products.forEach((product, index) => {
    productShow += `
      <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>
          <button onclick="editProduct(${index})">Sửa</button>
          <button onclick="delProduct(${index})">Xóa</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("tbody-show-product").innerHTML = productShow;
};

const addProduct = () => {
  const productName = document.getElementById("product-name").value;
  const productPrice = document.getElementById("price").value;
  const products = getProducts();
  const product = {
    name: productName,
    price: productPrice,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  showProduct();
};

const editProduct = (index) => {
  const products = getProducts();
  if (products.length === 0) return;

  const product = products[index];
  document.getElementById("product-name").value = product.name;
  document.getElementById("price").value = product.price;
};

const delProduct = (index) => {
  const products = getProducts();
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  showProduct();
};
