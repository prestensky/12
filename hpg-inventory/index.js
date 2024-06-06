'use strict';

let cells = [];
const items = [
    {
        img: 'images/000.png',
        title: 'Пустая ячейка'
    },
    {
        img: 'images/Читерский кубик.png',
        title: 'Читерский кубик',
    },
    {
        img: 'images/Кубик хуюбика.png',
        title: 'Кубик хуюбика'
    },
    {
        img: 'images/Очки EZ.png',
        title: 'Очки EZ',
    },
    {
        img: 'images/Повязка Рэмбо.png',
        title: 'Повязка Рэмбо',
    },
    {
        img: 'images/Свиток реролла.png',
        title: 'Свиток реролла'
    },
    {
        img: 'images/Шар всезнания.png',
        title: 'Шар всезнания'
    },
    {
        img: 'images/Взрывчатка.png',
        title: 'Взрывчатка',
        count: 2,
    },
    {
        img: 'images/Корона Колесного короля.png',
        title: 'Корона колесного короля',
    },
    {
        img: 'images/Ремонтный набор.png',
        title: 'Ремонтный набор'
    },
    {
        img: 'images/Красочная манга.png',
        title: 'Красочная манга',
    },
    {
        img: 'images/Рука мидаса.png',
        title: 'Рука мидаса',
        count: 3,
    },
    {
        img: 'images/Реверсивные сапоги.png',
        title: 'Реверсивные сапоги'
    },
    {
        img: 'images/Парные кольца времени.png',
        title: 'Парные кольца времени',
        count: 4,
    },
    {
        img: 'images/Тухлая шаурма.png',
        title: 'Тухлая шаурма',
        count: 2,
    },
    {
        img: 'images/Четырёхлистный клевер.png',
        title: 'Четырехлистный клевер'
    },
    {
        img: 'images/Чокер боли.png',
        title: 'Чокер боли'
    },
    {
        img: 'images/Полукаловая монетка.png',
        title: 'Полукаловая монетка'
    },
    {
        img: 'images/Шоколад.png',
        title: 'Шоколад',
    },
    {
        img: 'images/Туалетка.png',
        title: 'Туалетка',
    },
    {
        img: 'images/Штрафная Квитанция.png',
        title: 'Штрафная квитанция',
    },
    {
        img: 'images/Дырявый парашют.png',
        title: 'Дырявый парашют'
    },
    {
        img: 'images/Напёрсток удачи.png',
        title: 'Наперсток удачи'
    },
    {
        img: 'images/Рука для fisting.png',
        title: 'Рука для fisting',
        count: 5,
    },
    {
        img: 'images/Тотем мошны.png',
        title: 'Тотем мошны',
        isNotSlot: true
    },
    {
        img: 'images/Плюсовый блокнот.png',
        title: 'Плюсовый блокнот',
        isNotSlot: true
    },

    {
        img: 'images/Интрига.png',
        title: 'Интрига',
        isNotSlot: true
    },
    {
        img: 'images/Однорукий бандит.png',
        title: 'Однорукий бандит',
        isNotSlot: true
    },
    {
        img: 'images/Грязнулькин.png',
        title: 'Грязнулькин',
        isNotSlot: true
    },
    {
        img: 'images/Лепреконий схрон.png',
        title: 'Лепреконий схрон',
        isNotSlot: true
    },
    {
        img: 'images/Заначка Старыги.png',
        title: 'Заначка Старыги',
        isNotSlot: true
    },
    {
        img: 'images/Стример не тупой.png',
        title: 'Стример не тупой',
        isNotSlot: true
    },
    {
        img: 'images/Аптечка.png',
        title: 'Аптечка',
        isNotSlot: true
    },
    {
        img: 'images/Mine now TriHard.png',
        title: 'Mine now TriHard',
        isNotSlot: true
    },
    {
        img: 'images/Удачный неудачник.png',
        title: 'Удачный неудачник',
        isNotSlot: true
    },
    {
        img: 'images/Торопыга.png',
        title: 'Торопыга',
        isNotSlot: true
    },
    {
        img: 'images/Бог любит троицу.png',
        title: 'Бог любит троицу',
        isNotSlot: true
    },
    {
        img: 'images/Орёл или решка.png',
        title: 'Орел или решка',
        isNotSlot: true
    },
    {
        img: 'images/А где это я.png',
        title: 'А где это я',
        isNotSlot: true
    },
    {
        img: 'images/Я здесь закон.png',
        title: 'Я здесь закон',
        isNotSlot: true
    },
    {
        img: 'images/Выбор бумера.png',
        title: 'Выбор бумера',
        isNotSlot: true
    },
    {
        img: 'images/Выбор зумера.png',
        title: 'Выбор зумера',
        isNotSlot: true
    },
    {
        img: 'images/Мистер Ржавчик.png',
        title: 'Мистер Ржавчик',
        isNotSlot: true
    },
    {
        img: 'images/Всепоглощающий свин.png',
        title: 'Всепоглощающий свин',
        isNotSlot: true
    },
    {
        img: 'images/Грабли.png',
        title: 'Грабли',
        isNotSlot: true
    },
    {
        img: 'images/Тормознутый.png',
        title: 'Тормознутый',
        isNotSlot: true
    },
    {
        img: 'images/Крыса.png',
        title: 'Крыса',
        isNotSlot: true
    },
    {
        img: 'images/Увы.png',
        title: 'УВЫ',
        isNotSlot: true
    },
    {
        img: 'images/Часовой рост.png',
        title: 'Часовой рост',
        isNotSlot: true
    },
    {
        img: 'images/Часы перемен.png',
        title: 'Часы перемен',
        count: 3,
    },
    {
        img: 'images/Инструменты клоуна.png',
        title: 'Инструменты клоуна',
        count: 2,
    },
    {
        img: 'images/Хук Пуджа.png',
        title: 'Хук Пуджа',
        isNotSlot: true
    },
];
let selectedCellKey = false;

const inventory = $('.inventory'),
    cellTemplate = $('<div class="cell"><img/><div class="count">1</div></div>'),
    controlIncrementCounter = $('<a/>', {
        text: '+',
        title: 'Увеличить кол-во зарядов/прочность',
        class: 'inc',
        href: '#',
        click: function () {
            const idx = $(this).closest('.cell').index();

            if (cells[idx].count) {
                cells[idx].count += 1;
            }
            else {
                cells[idx].count = 2;
            }
            cellUpdateDOM(idx);
            saveState(cells);

            return false;
        }
    }),
    controlDecrementCounter = $('<a/>', {
        text: '–',
        title: 'Уменьшить кол-во зарядов/прочность',
        class: 'dec',
        href: '#',
        click: function () {
            const idx = $(this).closest('.cell').index();

            if (cells[idx].count && cells[idx].count > 1) {
                cells[idx].count -= 1;
            }
            // кончились заряды
            else if (cells[idx].count === 1) {
                // пустая ячейка
                cells[idx].item = items[0]
            }
            cellUpdateDOM(idx);
            saveState(cells);

            return false;
        }
    }),
    controlInvert = $('<a/>', {
        text: '↑',
        title: 'Инвертировать',
        class: 'inversion',
        href: '#',
        click: function () {
            const idx = $(this).closest('.cell').index();

            cells[idx].inverted = !cells[idx].inverted;
            cellUpdateDOM(idx);
            saveState(cells);

            return false;
        }
    }),
    controlNotSlot = $('<input/>', {
        type: 'checkbox',
        title: 'Предмет, не занимающий слот в инвентаре',
        click: function (e) {
            e.stopPropagation();

            const idx = $(this).closest('.cell').index();

            cells[idx].isNotSlot = $(this).is(':checked');
            cellUpdateDOM(idx);
            saveState(cells);
        }
    }),
    controlDelete = $('<a/>', {
        text: '×',
        title: 'Удалить ячейку',
        class: 'remove',
        href: '#',
        click: function () {
            const $cell = $(this).closest('.cell'),
                idx = $cell.index();

            delete cells[idx];
            cells.splice(idx, 1);

            $cell.find(cellControlsTemplate).detach();
            $cell.remove();
            saveState(cells);

            return false;
        }
    }),
    cellControlsTemplate = $('<div class="controls"></div>')
        .append(controlDecrementCounter)
        .append(controlIncrementCounter)
        .append(controlInvert)
        .append(controlNotSlot)
        .append(controlDelete)
    ,
    addCell = function () {
        const newCell = cellTemplate.clone();
        inventory.append(newCell);
        $('.count', newCell).hide();

        newCell.on('click', cellOnClick);
        newCell.on('mouseenter', cellOnHover);
        newCell.on('mouseleave', function () {
            $(this).find(cellControlsTemplate).detach()
        });
    },
    cellUpdateDOM = function (key) {
        if (!cells[key] || !cells[key].item) {
            return
        }

        const $cell = inventory.children('.cell').eq(key);

        $('img', $cell).attr({
            src: cells[key].item.img,
            title: cells[key].item.title
        });

        if (cells[key].count && cells[key].count > 1) {
            $('.count', $cell).show()
        }
        else {
            $('.count', $cell).hide()
        }
        $('.count', $cell).text(cells[key].count);

        if (cells[key].isNotSlot) {
            $cell.addClass('not-slot');
        }
        else {
            $cell.removeClass('not-slot');
        }

        if (cells[key].inverted) {
            $('img', $cell).addClass('inverted');
        }
        else {
            $('img', $cell).removeClass('inverted');
        }
    },
    selectCell = function (key) {
        selectedCellKey = key;

        const cells = $('.cell', inventory)
            .removeClass('active');

        if (typeof(key) === "number") {
            cells.eq(key).addClass('active');
        }
    },
    cellOnClick = function () {
        const $cell = $(this),
            currIndex = $cell.index()
        ;
        if (selector.is(':visible')) {
            if (selectedCellKey === currIndex) {
                selector.hide();
                selectCell(false);
            }
            else {
                selectCell(currIndex);
            }
        }
        else {
            selector.show();
            selectCell(currIndex);
        }
    },
    addCellOnClick = function () {
        cells.push({});
        addCell();
        saveState(cells);
    },
    cellOnHover = function () {
        const idx = $(this).index();

        controlNotSlot.prop('checked', Boolean(cells[idx].isNotSlot));

        $(this).append(cellControlsTemplate);
    },
    createCells = function (cellsArray) {
        for (let i in cellsArray) {
            addCell();
            cellUpdateDOM(i);
        }
    },
    getStorageKeySuffix = function () {
        return location.search.substring(1, 20);
    },
    saveState = function (cellsArray) {
        localStorage.setItem('inventory-' + getStorageKeySuffix(), JSON.stringify(cellsArray));
    },
    loadState = function () {
        let result = [];

        try {
            result = JSON.parse(localStorage.getItem('inventory-' + getStorageKeySuffix()));
        } catch (e) {
            console.error('Loading state', e);
        }

        if (!result || !result.length) {
            result = [
                {},
                {},
                {},
            ];
        }

        return result;
    },
    selector = $('.selector'),
    selectorOnClick = function () {
        const $itemKey = $(this).data('key');

        cells[selectedCellKey] = {
            item: items[$itemKey],
            count: items[$itemKey].count || 1,
            isNotSlot: items[$itemKey].isNotSlot || false
        };
        cellUpdateDOM(selectedCellKey);

        saveState(cells);
        selectCell(false);
        selector.hide();
    },
    createSelector = function(items) {
        const list = $('ul', selector);
        for(let i in items) {
            list.append(
                $('<li/>', {
                    ['data-key']: i,
                    html: $('<img/>', {
                        src: items[i].img,
                        title: items[i].title
                    }),
                    click: selectorOnClick
                })
            )
        }
    }
;

$('.add-cell').on('click', addCellOnClick);

cells = loadState();
console.log(cells);
createCells(cells);
createSelector(items);

