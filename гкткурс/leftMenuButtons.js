window.onload = function() {
    var menuItems = [
        {
            /* Добавление иконки База знаний в боковое меню после Уведомлений*/
            className: 'menu-item-knowledge_base',
            href: 'https://smm-trends.ru/teach/control/stream/view/id/889103476',
            imgSrc: 'https://fs16.getcourse.ru/fileservice/file/download/a/59475/sc/56/h/c60f5325e5b5a7d34a739d612a497790.png',
            referenceClass: 'li.menu-item.menu-item-notifications_button_small'
        },
        {
/* Добавление иконки Канал клуба по курсу в боковое меню после Базы знаний*/
            className: 'menu-item-club',
            href: 'https://t.me/+RyRbLr6v62AyYWZi',
            imgSrc: 'https://fs01.getcourse.ru/fileservice/file/download/a/59475/sc/196/h/80b6222892d5c877bad95d9ca2e06bc1.png',
            referenceClass: 'li.menu-item.menu-item-knowledge_base'
        },
{
            /* Добавление иконки Чат клуба в боковое меню после Канал клуба*/
            className: 'menu-item-chanel-club',
            href: 'https://t.me/+DZokJXG3gBg1NTEy',
            imgSrc: 'https://fs01.getcourse.ru/fileservice/file/download/a/59475/sc/196/h/80b6222892d5c877bad95d9ca2e06bc1.png',
            referenceClass: 'li.menu-item.menu-item-navigation'
        },
{
            /* Добавление иконки Партнерская программа в боковое меню после Чат клуба*/
            className: 'menu-item-chanel-partner',
            href: 'https://smm-trends.ru/partners_page',
            imgSrc: 'https://fs21.getcourse.ru/fileservice/file/download/a/59475/sc/380/h/c0d887b71d8a9b64ffb012aef1fbc1d4.png',
            referenceClass: 'li.menu-item.menu-item-navigation'
        }
    ];

    menuItems.forEach(function(item) {
        var newItem = document.createElement('li');
        newItem.className = 'menu-item ' + item.className;

        var link = document.createElement('a');
        link.href = item.href;
        link.target = '_blank';

        var iconImg = document.createElement('img');
        iconImg.className = 'menu-item-icon';
        iconImg.src = item.imgSrc;

        link.appendChild(iconImg);
        newItem.appendChild(link);

        var referenceItem = document.querySelector(item.referenceClass);
        if (referenceItem) {
            referenceItem.parentNode.insertBefore(newItem, referenceItem.nextSibling);
        } else {
            console.log('Элемент с классом "' + item.referenceClass + '" не найден');
        }
    });
}
