class Facade {
  mostrarProductosAdmin() {
    const sectionList = document.getElementById("sectionList");
    sectionList.innerHTML = `<header class="card__header">
          <h2 class="card__title" id="productListTitle">
            Listado de productos
          </h2>
          <p class="card__hint">
            Aquí aparecerán los productos cargados desde la API (JS lo
            rellenará).
          </p>
        </header>

        <!--
        IMPORTANTE (alumnado):
        Este contenedor debe maquetarse con FLEXBOX en el CSS.
        La idea es que cada .product sea una "tarjeta" y que el contenedor
        .product-list distribuya las tarjetas en filas y se adapte a distintos anchos.
      -->
        <div class="product-list" id="productList">
          <!-- Tarjeta ejemplo (JS la clonará o la generará dinámicamente) -->
          <article class="product" data-id="__demo__">
            <div class="product__body">
              <h3 class="product__name">Producto de ejemplo</h3>
              <p class="product__desc">
                Descripción de ejemplo para ver el diseño.
              </p>

              <p class="product__meta">
                <span class="badge">49,99 €</span>
                <span class="muted">Creado por: <strong>usuario</strong></span>
              </p>
            </div>

            <div class="product__actions">
              <!-- Solo visible para admin (JS lo decidirá) -->
              <button class="btn btn--danger" type="button" disabled>
                Eliminar
              </button>
            </div>
          </article>

          <!-- Más tarjetas generadas por JS -->
        </div>`;
  }
}
