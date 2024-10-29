Feature: Busca de produtos na API

  Scenario: Buscar o produto com ID 15
    Given que eu quero buscar um produto com ID 15
    When eu faço uma requisição para a API de produtos
    Then a resposta deve ter status 200
    And o nome do produto deve ser "Beats Studio 2 Over-Ear Matte Black Headphones"
    And a resposta não deve conter os seguintes produtos:
      | productName                                         |
      | Bose SoundLink Around-ear Wireless Headphones II    |
      | Bose SoundLink Wireless Speaker                     | 
      | game of thrones                                     |
      | HP Chromebook 14 G1(ENERGY STAR)                    |
      | HP Chromebook 14 G1(ES)                             |
      | HP ElitePad 1000 G2 Tablet                          |
      | HP Elite x2 1011 G1 Tablet                          |
      | HP ENVY - 17t Touch Laptop                          |
      | HP ENVY x360 - 15t Laptop                           |
      | HP H2310 In-ear Headset                             |
      | HP Pavilion 15t Touch Laptop                        |
      | HP Pavilion 15z Laptop                              |
      | HP Pavilion 15z Touch Laptop                        |
      | HP Pavilion x360 - 11t Touch Laptop                 |
      | HP Pro Tablet 608 G1                                |
      | HP Roar Mini Wireless Speaker                       |
      | HP Roar Plus Wireless Speaker                       |
      | HP Roar Wireless Speaker                            |
      | HP S9500 Bluetooth Wireless Speaker                 |
      | HP Spectre x360 - 13-4102dx                         |
      | HP Stream - 11-d020nr Laptop                        |
      | HP USB 3 Button Optical Mouse                       |
      | HP Z3200 Wireless Mouse                             |
      | HP Z3600 Wireless Mouse                             |
      | HP Z4000 Wireless Mouse                             |
      | HP Z8000 Bluetooth Mouse                            |
      | HP ZBook 17 G2 Mobile Workstation                   |
      | Kensington Orbit 72337 Trackball with Scroll Ring   |
      | Kensington Orbit 72352 Trackball                    |
      | Logitech G502 Proteus Core                          |
      | Logitech USB Headset H390                           |
      | Logitech X100 Speaker System - Wireless Speaker(s)  |
      | Microsoft Sculpt Touch Mouse                        |


--------------------------------------------------------------------------------------------------------------------------------------

