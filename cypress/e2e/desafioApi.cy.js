describe("Teste de busca do produto com ID 15", () => {
  it("Deve retornar somente o produto com ID 15", () => {
    const productId = 15;

    // Fazendo a requisição para a API
    cy.request(
      "GET",
      `https://www.advantageonlineshopping.com/catalog/api/v1/products/${productId}`
    ).then((response) => {
      // Log da resposta para verificar a estrutura
      console.log(response.body);

      // Verifica se a resposta foi bem-sucedida
      expect(response.status).to.eq(200);

      //Validação das Propriedades do Produto
      expect(response.body).to.have.property(
        "productName",
        "Beats Studio 2 Over-Ear Matte Black Headphones"
      );

      //Validação das Propriedades de Produtos Que não devem estar Presente
      expect(response.body).to.not.have.property(
        "productName",
        "Bose SoundLink Around-ear Wireless Headphones II",
        "Bose SoundLink Wireless Speaker",
        "game of thrones",
        "HP Chromebook 14 G1(ENERGY STAR)",
        "HP Chromebook 14 G1(ES)",
        "HP ElitePad 1000 G2 Tablet",
        "HP Elite x2 1011 G1 Tablet",
        "HP ENVY - 17t Touch Laptop",
        "HP ENVY x360 - 15t Laptop",
        "HP H2310 In-ear Headset",
        "HP Pavilion 15t Touch Laptop",
        "HP Pavilion 15z Laptop",
        "HP Pavilion 15z Touch Laptop",
        "HP Pavilion x360 - 11t Touch Laptop",
        "HP Pro Tablet 608 G1",
        "HP Roar Mini Wireless Speaker",
        "HP Roar Plus Wireless Speaker",
        "HP Roar Wireless Speaker",
        "HP S9500 Bluetooth Wireless Speaker",
        "HP Spectre x360 - 13-4102dx",
        "HP Stream - 11-d020nr Laptop",
        "HP USB 3 Button Optical Mouse",
        "HP Z3200 Wireless Mouse",
        "HP Z3600 Wireless Mouse",
        "HP Z4000 Wireless Mouse",
        "HP Z8000 Bluetooth Mouse",
        "HP ZBook 17 G2 Mobile Workstation",
        "Kensington Orbit 72337 Trackball with Scroll Ring",
        "Kensington Orbit 72352 Trackball",
        "Logitech G502 Proteus Core",
        "Logitech USB Headset H390",
        "Logitech X100 Speaker System - Wireless Speaker(s)",
        "Microsoft Sculpt Touch Mouse"
      );
    });
  });
});
