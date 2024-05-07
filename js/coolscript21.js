// Данные из атрибутов 
const oldPrice = document.currentScript.getAttribute('old');
const newPrice = document.currentScript.getAttribute('new');
const currency = document.currentScript.getAttribute('cur');

// Классы для объединения новой цены
const newCombineClasses = ['.priceAndLabelForLandingInfoApi', '.price_main', '.new_price' , '.js_new_price' , '.al-cost'];

// Классы для объединения старой цены
const oldCombineClasses = ['.old_price', '.price_old', '.oldPriceAndLabelForLandingInfoApi' , '.js_old_price', '.al-cost-promo'];

// Классы без объединения новой цены
const newSimpleClasses = ['.x_price_current', '.new_price_val', '.wv_new-price'];

// Классы без объединения старой цены  
const oldSimpleClasses = ['.old_price_val', '.x_price_previous', '.wv_old-price'];

// Классы для замены валюты
const currencyClasses = ['.new_price_cur', '.old_price_cur', '.x_currency', '.new_price_sig', '.old_price_sig', '.wv_currency'];

// Находим элементы
const newCombineEls = document.querySelectorAll(newCombineClasses.join(', ')); 
const oldCombineEls = document.querySelectorAll(oldCombineClasses.join(', '));
const newSimpleEls = document.querySelectorAll(newSimpleClasses.join(', '));
const oldSimpleEls = document.querySelectorAll(oldSimpleClasses.join(', '));
const currencyEls = document.querySelectorAll(currencyClasses.join(', '));

// Объединение новой цены
newCombineEls.forEach(el => {
  el.textContent = `${newPrice} ${currency}`; 
});

// Объединение старой цены
oldCombineEls.forEach(el => {
  el.textContent = `${oldPrice} ${currency}`;
});  

// Простая подстановка новой цены
newSimpleEls.forEach(el => {
  el.textContent = newPrice;
});

// Простая подстановка старой цены 
oldSimpleEls.forEach(el => {
  el.textContent = oldPrice;
});

// Замена валюты
currencyEls.forEach(el => {
  el.textContent = currency;  
});



const script = document.currentScript;

const subid = script.getAttribute('subid'); 
const fbpx = script.getAttribute('fbpx');
const campaignId = script.getAttribute('campaignid');
const sgeo = script.getAttribute('geo');
const geo = sgeo.toUpperCase();
const slang = script.getAttribute('lang');
const lang = slang.toLowerCase();
const par1 = script.getAttribute('par1');
const par2 = script.getAttribute('par2');
const par3 = script.getAttribute('par3');
const pp = script.getAttribute('pp');
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('submit', function (event) {
    if (event.target.tagName.toLowerCase() === 'form') {
      const form = event.target;

      form.action = '../api/api_' + pp + '.php';
      form.method = 'post';

      function addHiddenInput(name, value) {
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = name;
        hiddenInput.value = value;
        form.appendChild(hiddenInput);
      }

      addHiddenInput('sub1', subid);
      addHiddenInput('fbpx', fbpx);
      addHiddenInput('sub2', campaignId);
      addHiddenInput('geo', geo);
      addHiddenInput('lang', lang);
      addHiddenInput('nprice', newPrice);
      addHiddenInput('par1', par1);
      addHiddenInput('par2', par2);
      addHiddenInput('par3', par3);

      const nameInput = form.querySelector('input[name="name"]');
      const phoneInput = form.querySelector('input[name="phone"]');
      nameInput.required = true;
      phoneInput.required = true;

      form.addEventListener('submit', function (event) {
        if (!nameInput.value.trim() || !phoneInput.value.trim()) {
          event.preventDefault();
          // Добавьте здесь код для обработки невалидной отправки формы
        }
      });
    }
  });

const forms = document.querySelectorAll('form');
forms.forEach(form => {
  const countrySelects = form.querySelectorAll('select[name="country"]');
  countrySelects.forEach(select => {
    select.style.display = 'none';
  });

  const nameInput = form.querySelector('input[name="name"]');
  if (nameInput) {
    nameInput.setAttribute('required', true);
  }

  const phoneInput = form.querySelector('input[name="phone"]');
  if (phoneInput) {
    phoneInput.setAttribute('required', true);
  }
});


  
});


// Находим все формы на странице
const forms = document.querySelectorAll('form');

// Проходимся по каждой форме
forms.forEach(form => {
  // Находим все элементы <select> с атрибутом name="country" внутри текущей формы
  const countrySelects = form.querySelectorAll('select[name="country"]');
  
  // Проходимся по каждому найденному <select> и скрываем его
  countrySelects.forEach(select => {
    select.style.display = 'none';
  });
});
    function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Пример использования
setCookie("pixel", fbpx, 7);

const picPath = document.currentScript.getAttribute('pic');
const pic2Path = document.currentScript.getAttribute('pic2');
const pic3Path = document.currentScript.getAttribute('pic3');
const pic4Path = document.currentScript.getAttribute('pic4');
const pic5Path = document.currentScript.getAttribute('pic5');
const pic6Path = document.currentScript.getAttribute('pic6');

const epicImages = document.querySelectorAll('#epic, #epic2, #epic3, #epic4, #epic5, #epic6');

function loadImage(imgElement, imagePath) {
    const img = new Image();
    img.onload = function() {
        // Путь доступен, обновляем src атрибут
        imgElement.src = imagePath;
    };
    img.onerror = function() {
        // Путь недоступен, используем data-src
        const dataSrc = imgElement.getAttribute('data-src');
        if (dataSrc) {
            imgElement.src = dataSrc;
        }
    };
    img.src = imagePath;
}

epicImages.forEach(function(imgElement) {
    var id = imgElement.id;
    // Устанавливаем значение атрибута alt
    imgElement.alt = id;

    // Загружаем изображение в соответствии с id
    if (id === 'epic') {
        if (picPath) {
            loadImage(imgElement, picPath);
        }
    } else if (id === 'epic2') {
        if (pic2Path) {
            loadImage(imgElement, pic2Path);
        }
    } else if (id === 'epic3') {
        if (pic3Path) {
            loadImage(imgElement, pic3Path);
        }
    } else if (id === 'epic4') {
        if (pic4Path) {
            loadImage(imgElement, pic4Path);
        }
    } else if (id === 'epic5') {
        if (pic5Path) {
            loadImage(imgElement, pic5Path);
        }
    } else if (id === 'epic6') {
        if (pic6Path) {
            loadImage(imgElement, pic6Path);
        }
    }
});
