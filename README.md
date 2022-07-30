# Командний проект

## Завдання які було реалізовано:

* Верстка адаптивна, точки перелому 320px, 768px, 1440px. Для мобільної версії сайту верстка респонсивна. Сайт коректно відображається у всіх можливих розмірах вікна браузера та пристроях, починаючи з ширини 320px, як у портретній, так і в альбомній орієнтації;
* Верстка валідна (https://validator.w3.org/, https://validator.w3.org/unicorn/);
* Забезпечено дотримання семантики відповідно до стандартів HTML5;
* Забезпечено оптимізацію розмірів векторної та растрової графіки;
* Забезпечено підтримку відображення картинок для retina-екранів;
* Оптимізовано завантаження зображень;
* Додано відображення фавікон сторінки;
* Фінальна версія проєкту задеплоєна на GitHub Pages;
* Усі паршали файлів стилів лежать у src/sass та імпортуються у src/sass/main.scss;
* Усі HTML-файли лежать у папці src/partials і підключені до index.html через тег ```<include>```.

  
## Практичний досвід який отримано:
  
- досвід роботи із бандлером проектів Parcel ([https://goitacademy.github.io/parcel-project-template]);
- командна взаємодія та робота з Git;
- вправність розгалуження та злиття проєкту;
- вирішення конфліктів після злиття гілок;
- досвід планування та постановки завдань;
- досвід роботи з Trello (https://trello.com/).
  
## Технології, які використовувались на проекті:
 
- HTML5 & CSS3;
- Flex CSS;
- CSS препроцесор SASS;
- Git & GitHub;
- JavaScript (для слайдера);
- BEM;
- бандлер проектів Parcel.

### Макет проекту:
  https://www.figma.com/file/0LGtTLN6E6Di4uBIS1T9ts/BHO-NEW-(Copy)?node-id=0%3A1
  
## Технічне завдання проекту:

- Розробка односторінкового сайту для компанії HellEN.
- Верстка адаптивна, точки перелому 320px, 768px, 1440px. Для мобільної версії сайту верстка респонсивна. Сайт повинен коректно переглядатися у всіх можливих розмірах вікна браузера та пристроях, починаючи з ширини 320px, як у портретній, так і в альбомній орієнтації.
- Верстка валідна (https://validator.w3.org/, https://validator.w3.org/unicorn/)
- Забезпечити дотримання семантики відповідно до стандартів HTML5.
- Забезпечити оптимізацію розмірів векторної та растрової графіки
- Забезпечити підтримку відображення картинок для retina-екранів
- Оптимізувати завантаження зображень.
- Додати відображення фавікон сторінки.

### Структура проекта.

- Header
- Hero
- Advantages
- Problems
- How we do
- Program
- Benefits
- About
- Guarantee
- Reviews
- Contacts
- Footer

#### Header
У шапці сайту знаходиться логотип, навігаційне меню та кнопка “Консультація по телефону”.

На мобільній та планшетній версії меню навігації відображається як спливаючий елемент. Анімація появи довільна. Мобільне меню фіксоване, ширина та висота перекриває всю область екрану (viewport).

Меню реалізовано якірними посиланнями, які ведуть до  відповідних розділів макета.

Кнопка “По телефону” відкриває модальне вікно з формою замовлення. Оскільки дизайну модального вікна немає на макеті, це не обов'язкове завдання.

#### Hero
"Комплексна підготовка до ЗНО з англійської мови" є заголовком сторінки.

Кнопка “Хочу на безкоштовне заняття” є якірним посиланням на розділ із формою.

Головне зображення фону зберегти у форматі png. Зображення можна вставляти контентно, якщо плануєте додавати анімоване зображення.

#### Advantages

Візуальний заголовок у секції відсутній. Додати прихований заголовок для читання краулерами.

Картки переваг оформити як сітку елементів.

Іконки зберегти у форматі svg і вставити як псевдоелементи.

#### Problems
Секція містить заголовок.

Фон секції виконати градієнтом (згори чорний, білий внизу).

Секція містить зображення фону, зберегти його у форматі svg.

Список проблем оформити як сітку елементів. Для нумерації пунктів список використовуйте css-лічильники.
How we do
Секція містить заголовок та сітку карток.

Кожна картка містить заголовок. Декоративне підкреслення заголовків виконати псевдоелементом.

Іконки на картках реалізувати за допомогою svg sprite.

#### Program

Секція містить заголовок та трирівневий список.

Декоративне маркування списку виконати псевдоелементами.

Декоративне зображення додати як псевдоелемент.

#### Benefits

Секція містить заголовок та список вигод.

Список вигод виконується по одному шаблону з аналогічним списком для розділу Problems.

#### About
Секція містить заголовок, контентне зображення та блок з описом.

У блоці з описом ім'я викладача можна назвати заголовком.

Іконки списку виконати псевдоелементами. Зображення іконки зберегти у форматі svg.

Текст опис додається параграфами.

Посилання в кінці блоку може відкривати модальне вікно із зображенням сертифіката або вести на ресурс, що пояснює важливість цього сертифіката.

#### Guarantee
У секції знаходиться заголовок та список гарантій.

Іконки-маркери зберегти у форматі svg та реалізувати псевдоелементами.

Декоративні лінії виконати як пункти списку border.

#### Reviews
Секція містить заголовок та слайдер із відгуками.

Відгук є самостійним твором автора та може публікуватися окремо від іншого контенту сторінки. Відповідно до специфікацій відгук (коментар) виділяється тегом article.

На кожному слайді є фото, посилання на соціальну мережу і блок з описом відгуку. Текст відкликання частково ховається, повне відображення тексту можна побачити по кліку на посилання “Читати далі”.

Внизу тексту знаходиться пагінація (посилання на слайд відкликання). Верстку пагінації потрібно робити лише у випадку, якщо не плануєте підключати бібліотеку слайдера. При підключенні слайдера пагінація вставляється автоматично, потрібно лише стилізувати їх зовнішній вигляд згідно макету.

У більш складному варіанті реалізації пагінація є пов'язаним (другим) слайдером.

*Підключення слайдера і все, що пов'язане з використанням JavaScript не є обов'язковим.

#### Contacts
У секції контактів знаходиться заголовок та форма зворотного зв'язку.

Для форми необхідно додати мінімальну валідацію даних для введення. Для цього можна використати атрибут pattern.

Якщо було введено невалідні дані, поле має підсвічуватися червоним. Валідація не повинна підсвічуватися, поки користувач не ввів дані.

#### Footer
У футері знаходиться логотип, контактний номер телефону та посилання на соціальні мережі.

Номер телефону має бути реалізований за допомогою протоколів посилання.

Іконки соціальних мереж вставляйте тлом, градієнт не передається через svg sprite. Посилання на зовнішні джерела повинні відкриватися у новій вкладці.


Обов'язковим є реалізувати коректну верстку макету.

Наявність слайдерів, анімацій та модальних вікон не є обов'язковою, і реалізується командою за наявності бажання та часу на виконання.


  
  
