Feature: Validação de Acesso ao Site

  Scenario: Buscar e adicionar um produto ao carrinho
    Given que estou na página inicial
    And que estou logado com o username "thierryTeste1" e senha "Senha123"
    When busco por "BEATS STUDIO 2"
    And seleciono o produto "Beats Studio 2 Over-Ear Matte Black Headphones"
    And adiciono o produto ao carrinho
    And acesso o carrinho de compras
    And finalizo a compra
    Then valido que o produto "BEATS STUDIO 2" está visível na tela de carrinho de compras
    And valido que o produto "BEATS STUDIO 2" está visível na tela de pagamento do pedido
