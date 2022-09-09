const Properties = () => {
  return (
    <section class="properties">
      <div class="container">
        <div class="properties__top">
          <p>Объекты в управленнии</p>
          <a href="#">Все объекты</a>
        </div>
        <div class="properties__bottom">
          <div class="property-1">
            <img src="img/vavilova.png" alt="" />
            <p class="property__adress">Вавилова ул, 67</p>
            <p class="property__text">Москва г.</p>
            <p class="property__text">Тип здания: МКД</p>
          </div>
          <div class="property-1">
            <img src="img/lucky.png" alt="" />
            <p class="property__adress">Счастливая ул, 1</p>
            <p class="property__text">
              Ленинградская обл, Гатчинский р-н, Горки д.
            </p>
            <p class="property__text">Тип здания: МКД</p>
          </div>
          <div class="property-1">
            <img src="img/west.png" alt="" />
            <p class="property__adress">Западная ул, 1</p>
            <p class="property__text">Москва г., Восточный п.</p>
            <p class="property__text">Тип здания: МКД</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
