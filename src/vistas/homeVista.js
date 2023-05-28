export default {
  template: `

    <!-- Introduccion -->
    <section id="home" class="banner_wrapper p-0">
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="height: 700px; background-image: url(./media/habitacionCarusel1.jpg);">
                    <div class="slide-caption text-center">
                        <div class="title">
                            <h1>Bienvenido a la  Pension Tejada</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <!-- About section -->
    <section id="about" class="about_wrapper">
        <div class="container">
            <div class="row flex-lg-row flex-column-reverse ">
                <div class="col-lg-6 text-center text-lg-start">
                    <h3>Bienvenido a la <span>Pension <br class="d-none d-lg-block">
                            Tejada</span> listo para quedarte </h3>
                    <p>En Pension Tejada nos dedicamos a proporcionar una solución de alojamiento cómoda y asequible para estudiantes. Nuestra empresa se especializa en el alquiler de pisos destinados exclusivamente a estudiantes, brindando un ambiente seguro y acogedor que se adapta a sus necesidades académicas y personales.</p>
                    <p>En nuestra página web, encontrarás una amplia gama de opciones de alojamiento que se ajustan a diferentes presupuestos y preferencias. </p>
                    <a href="#" class="main-btn mt-4">Explorar</a>
                </div>
                <div class="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
                    <img decoding="async" src="./media/sobre-nosotros.jpg" class="img-fluid" alt="About Us">
                </div>
            </div>
        </div>
    </section>
    <!-- About section exit -->


    <!-- Services section -->
    <section id="services" class="services_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 section-title text-center mb-5">
                    <h6>Estamos para ti</h6>
                    <h3>Nuestros fantasticos Servicios</h3>
                </div>
            </div>
            <div class="row align-items-center service-item-wrap">
                <div class="col-lg-7 p-lg-0">
                    <!--Service Area Start-->
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade active show" id="spa" role="tabpanel">
                            <img width="600px" decoding="async" src="./media/servicio-comida.jpg" alt="">
                        </div>
                        <div class="tab-pane fade" id="restaurent" role="tabpanel">
                            <img width="600px" decoding="async" src="./media/servicio-limpieza.jpg" alt="">
                        </div>
                        <div class="tab-pane fade" id="swimming" role="tabpanel">
                            <img width="600px" decoding="async" src="./media/piscina.jpeg" alt="">
                        </div>
                        <div class="tab-pane fade" id="conference" role="tabpanel">
                            <img width="600px" decoding="async" src="./media/bar.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6 text-center text-lg-start">
                        <a href="#" class="main-btn mt-4">Explorar</a>
                    </div>
                    <!--Service Area End-->
                </div>
                <div class="col-lg-5 position-relative">
                    <!--Service Tab Menu Area Start-->
                    <div class="service-menu-area">
                        <ul class="nav">
                            <li>
                                <a data-bs-toggle="tab" href="#spa" class="active">
                                    <span class="service-icon">
                                    </span>
                                    <h5>Comida</h5>
                                    <p><span>Comida </span>Pide el servicio de comida y se te llevara a tu habitacion de forma inmedita </p>
                                </a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="#restaurent">
                                    <span class="service-icon">
                                    </span>
                                    <h5>Limpieza </h5>
                                    <p><span>Limpieza</span>Servico de limpieza las 24h para lo uqe haga falta </p>
                                </a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="#swimming">
                                    <span class="service-icon">
                                    </span>
                                    <h5>Piscina</h5>
                                    <p><span>Piscina</span>Cuento servicio de limpieza podras difrutar de esta con climatizacion  pra dias mas frios</p>
                                </a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="#conference">
                                    <span class="service-icon">
                                    </span>
                                    <h5>Bar</h5>
                                    <p><span>Bar</span> Descansa tomandote una bebida en nuestro bar despues de un dia duro </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--Service Tab Menu Area End-->
                </div>
            </div>
        </div>
    </section>
    <!-- Services section Exit -->


    <!-- Gallery section -->
    <section id="gallery" class="gallery_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 section-title text-center mb-5">
                    <h5>Nuestras mejores habitaciones</h5>
                    <h3>Galeria</h3>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img heigth="300px" decoding="async" src="./media/habitacionCarusel1.jpg" class="img-fluid w-100">
                    <div class="gallery-item-content"></div>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img decoding="async" src="./media/habitacionCarusel2.jpg" class="img-fluid w-100">
                    <div class="gallery-item-content"></div>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img decoding="async" src="./media/habitacionCarusel3.jpg" class="img-fluid w-100">
                    <div class="gallery-item-content"></div>
                </div>
                <div class="col-lg-3 col-md-6 gallery-item">
                    <img decoding="async" src="./media/habitacionCarusel4.jpg" class="img-fluid w-100">
                    <div class="gallery-item-content"></div>
                </div>
                <div class="col-md-6 gallery-item">
                    <img decoding="async" src="./media/habitacionCarusel5.jpg" class="img-fluid w-100">
                    <div class="gallery-item-content"> </div>
                </div>
                <div class="col-md-6 gallery-item">
                    <img decoding="async" src="./media/habitacionCarusel6.jpg" class="img-fluid w-100">
                    <div class="gallery-item-content"> </div>
                </div>
            </div>
        </div>
    </section>
  
  `,
  script: () => {
    console.log('home')
  }
}
