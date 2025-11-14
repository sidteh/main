document.addEventListener('DOMContentLoaded', function() {
    // Для всех позиций в part-manyPositions
    $('.builder-item.part-manyPositions .form-position').each(function() {
        var $el = $(this);
        var $input = $el.find('.form-position-input');

        // Снимаем старые обработчики change
        $input.off('change');

        // Вешаем свою логику
        $input.on('change', function() {
            if ($(this).prop('checked')) {
                $el.addClass('selected');
            } else {
                $el.removeClass('selected');
            }
        });

        // Инициализация при загрузке
        if ($input.prop('checked')) {
            $el.addClass('selected');
        }
    });
});
