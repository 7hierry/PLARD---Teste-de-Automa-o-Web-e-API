describe("Validação de Acesso ao Site", () => {
  before(() => {
    // Visitar a página inicial
    cy.visit("https://advantageonlineshopping.com/#/");
  });
  it("Deve buscar e adicionar um produto ao carrinho", () => {
    const login = "thierryTeste1";
    const senha = "Senha123";
    const produtoBuscado = "BEATS STUDIO 2";
    const produtoSelecionado = "Beats Studio 2 Over-Ear Matte Black Headphones";

    // Clicar no botão Profile
    cy.get("#menuUserLink").click();

    // Clicar no botão Username e Digitar
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type(login);

    // Clicar no botão Senhna e Digitar
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type(senha);

    // Clicar no botão Sign In
    cy.get("#sign_in_btn").click();

    // Digitar o produto no campo de busca
    cy.get("#mobileSearch > .roboto-medium").type(produtoBuscado);

    // Clicar no botão de busca
    cy.get("#mobileSearch > #menuSearch").click();

    // Selecionar o produto na lista
    cy.contains(produtoSelecionado).click();

    // Adicionar o produto ao carrinho
    cy.contains("ADD TO CART").click();

    // Acessar o carrinho de compras
    cy.get("#shoppingCartLink").click();

    // Finalizar a compra
    cy.get("#checkOutButton").click();

    //Validar o produto incluído no carrinho a tela de carrinho de compras
    cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').should('be.visible');

    //Botão Next
    cy.get(".mobileBtnHandler > #next_btn").click();

    //Validar o produto incluído no carrinho a tela de pagamento do pedidos
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > h3.ng-binding').should('be.visible');
  });
});
