import React from 'react';
import ReactDOM from 'react-dom/client';

//import {MiApp} from'./components/app';
import { Counter } from './components/counter';
//import './css/mycss.css'
import './css/tienda.css'
import './prueba'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <html lang="en"/>
    <head>

        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Numismatica Huajuapan</title>
        <link rel="stylesheet" href="src/css/tienda.css"/>
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'/>
    </head>
<body>
    <header>
        <div class="nav container">
            <a href="#" class="logo">Numismatica Huajuapan</a>
            <i class='bx bx-shopping-bag' id="cart-icon"></i>
            <div class="cart">
                <h2 class="cart-title">Monedero</h2>
                <div class="cart-content">
                </div>
                <div class="total">
                    <div class="total-title">Total</div>
                    <div class="total-price">$0</div>
                </div>
                <button type="button" class="btn-buy">Comprar</button>
                <i class='bx bx-x' id="close-cart"></i>

            </div>
        </div>
    </header>
    {/* <!-- carro --> */}
    <section class="shop container">
        <h2 class="section-title">Numismatica Huajuapan</h2>
        {/* <!-- cajas/productos --> */}
        <div class="shop-content">
            {/* Caja 1 */} 
            <div class="product-box">
                <img src="./src/imagenes/70aniversario-plata.png" alt="" class="product-img"/>
                <h2 class="product-title">Medalla de 70 Aniversario SONUMEX-Plata</h2>
                <span class="price">$2500</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
           {/* <!-- Caja 2 --> */}
            <div class="product-box">
                <img src="./src/imagenes/70aniversario-bronce.png" alt="" class="product-img"/>
                <h2 class="product-title">Medalla de 70 Aniversario SONUMEX-Bronce</h2>
                <span class="price">$850</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 3 --> */}
              <div class="product-box">
                <img src="./src/imagenes/ceramica.png" alt="" class="product-img"/>
                <h2 class="product-title">Medallas de Cerámica SONUMEZ-4 piezas</h2>
                <span class="price">$1000</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 4 --> */}
              <div class="product-box">
                <img src="./src/imagenes/Socios2021.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Nueva Medalla Para Socios SONUMEZ- Pewer,canto liso</h2>
                <span class="price">$700</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 5 --> */}
              <div class="product-box">
                <img src="./src/imagenes/cobres2022.jpg" alt="" class="product-img"/>
                <h2 class="product-title">NuevaMedalla, II Serie conmemorativa de la moneda mexicana.</h2>
                <span class="price">$2700</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 6 --> */}
              <div class="product-box">
                <img src="./src/imagenes/BICENTENARIOBRONCE.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Nueva Medalla Bicentenario de la Consumación de la Independencia 1821-2021-bronce</h2>
                <span class="price">$750</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 7 --> */}
              <div class="product-box">
                <img src="./src/imagenes/A2017B.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Medalla 65 Aniversario / 65 Convención SONUMEX. 1 onza, bronce. 2017
                </h2>
                <span class="price">$750</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 8 --> */}
              <div class="product-box">
                <img src="./src/imagenes/MM 203.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Medalla, II Serie conmemorativa de la moneda mexicana.</h2>
                <span class="price">$2300</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 9 --> */}
              <div class="product-box">
                <img src="./src/imagenes/MM 205.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Medalla, II Serie conmemorativa de la moneda mexicana.</h2>
                <span class="price">$2300</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 10 --> */}
              <div class="product-box">
                <img src="./src/imagenes/MM 206.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Medalla de 70 Aniversario SONUMEX-Bronce</h2>
                <span class="price">$850</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 11 --> */}
              <div class="product-box">
                <img src="./src/imagenes/MM 207.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Medalla, II Serie conmemorativa de la moneda mexicana.</h2>
                <span class="price">$2300</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 12 --> */}
              <div class="product-box">
                <img src="./src/imagenes/bloque1.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Ejemplares publicados entre 1960 y 1979</h2>
                <span class="price">$100</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 13 --> */}
              <div class="product-box">
                <img src="./src/imagenes/bloque2.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Ejemplares “Números dobles”</h2>
                <span class="price">$100</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
              {/* <!-- Caja 14 --> */}
              <div class="product-box">
                <img src="./src/imagenes/bloque3.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Ejemplares publicados entre 1980 y 2013 (con excepción de los señalados en otros apartados)</h2>
                <span class="price">$50</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
               {/* <!-- Caja 15 -->  */}
              <div class="product-box">
                <img src="./src/imagenes/bloque4.jpg" alt="" class="product-img"/>
                <h2 class="product-title">Ejemplar No. 240</h2>
                <span class="price">$200</span>
                <i class='bx bx-shopping-bag add-cart'></i>
              </div>
        
        
        </div>
    </section>
    <script src="./src/prueba.jsx"></script>
    
    </body>
    {/* </html> */}
    </React.StrictMode>
)