const { faker } = require('@faker-js/faker');

class ProductService {
  constructor() {
    // Inicializamos los productos
    this.products = [];
    // Generamos la data
    this.generate();
  }

  generate() {
    const size = 100;

    for (let index = 0; index < size; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.urlPicsumPhotos(),
      })
    }
  }

  crete() {

  }
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find(product => product.id === id)
  }
  update() { }
  delete() { }
}

module.exports = ProductService;
