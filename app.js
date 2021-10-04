let data = {
    products: [
      {
        id: "001",
        name: "test 123",
        description: "testing once more test 123",
        imagetitle: "test",
        image: '/img/e3eacd9e3878ea96db8b104512ebe02b.jpg',
        price: 35600
      },
      {
        id: "002",
        name: "test 123",
        description: "testing once more test 123",
        imagetitle: "test",
        image: '/img/e3eacd9e3878ea96db8b104512ebe02b.jpg',
        price: 40350
      },
      {
        id: "003",
        name: "test 123",
        description: "testing once more test 123",
        imagetitle: "test",
        image: '/img/e3eacd9e3878ea96db8b104512ebe02b.jpg',
        price: 12000
      },
    ]
  };

  var app = new Vue({
      el: '#app',
      data: {
          data: data
      }
  });