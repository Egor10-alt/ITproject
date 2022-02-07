define(['about', 'modal', 'card', 'basket'], function(AboutUs, Modal,  { Card, cardFlowersItem }, Basket){
  const aboutWrapper = document.querySelector('.about-wrapper');
  const wrapperBasket = document.querySelector('.basket-wrapper');
  const modalWrapper = document.querySelector('.modal-wrapper');
  const cardWrapper = document.querySelector('.card-wrapper');
  const bouquetsBtn = document.querySelector('.bouquets-btn');
  const flowersBtn = document.querySelector('.flowers-btn');
  const basketWrapper = document.querySelector('.main-basket-wrapper');
  let countUser = 0;
  let countBasket = 0;

  const about = new AboutUs(aboutWrapper, wrapperBasket);
  const modal = new Modal(modalWrapper);
  const card = new Card(cardWrapper);
  const basket = new Basket(basketWrapper);

  about.renderCallbackList('aboutClick',modal.render);
  about.renderCallbackList('aboutBasketClick', () => {
    if (countUser === 0) {
      basket.render();
      countUser += 1;
    }

    document.querySelector('.modal').classList.add('show-modal');
  });

  bouquetsBtn.addEventListener('click', event => {
    event.preventDefault();
    flowersBtn.classList.remove('active-flowers');
    bouquetsBtn.classList.add('active-flowers');
    card.renderBouquetsCards();
  });

  flowersBtn.addEventListener('click', event => {
    event.preventDefault();
    flowersBtn.classList.add('active-flowers');
    bouquetsBtn.classList.remove('active-flowers');
    card.renderBouquetsCards(cardFlowersItem);
  });


  card.renderCallbackList('onClick', config => {
    if (countBasket === 0) {
      basket.render();
      document.querySelector('.window-body').innerHTML = '';
      countBasket += 1;
      countUser += 1;
    }

    basket.renderBasket(config);
  });
});