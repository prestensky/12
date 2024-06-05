'use strict';

let cells = [];
const items = [
    {
        img: 'images/000.png',
        title: 'Пустая ячейка'
    },
    {
        img: 'images/001.png',
        title: 'Читерский кубик',
    },
    {
        img: 'images/002.png',
        title: 'Кубик хуюбика'
    },
    {
        img: 'images/003.png',
        title: 'Очки EZ',
    },
    {
        img: 'images/004.png',
        title: 'Повязка Рэмбо',
    },
    {
        img: 'images/005.png',
        title: 'Свиток реролла'
    },
    {
        img: 'images/006.png',
        title: 'Шар всезнания'
    },
    {
        img: 'images/007.png',
        title: 'Взрывчатка',
        count: 2,
    },
    {
        img: 'images/008.png',
        title: 'Корона колесного короля',
    },
    {
        img: 'images/009.png',
        title: 'Ремонтный набор'
    },
    {
        img: 'images/010.png',
        title: 'Красочная манга',
    },
    {
        img: 'images/011.png',
        title: 'Рука мидаса',
        count: 3,
    },
    {
        img: 'images/012.png',
        title: 'Реверсивные сапоги'
    },
    {
        img: 'images/013.png',
        title: 'Парные кольца времени',
        count: 4,
    },
    {
        img: 'images/014.png',
        title: 'Тухлая шаурма',
        count: 2,
    },
    {
        img: 'images/015.png',
        title: 'Четырехлистный клевер'
    },
    {
        img: 'images/016.png',
        title: 'Чокер боли'
    },
    {
        img: 'images/017.png',
        title: 'Полукаловая монетка'
    },
    {
        img: 'images/018.png',
        title: 'Шоколад',
    },
    {
        img: 'images/019.png',
        title: 'Туалетка',
    },
    {
        img: 'images/020.png',
        title: 'Штрафная квитанция',
    },
    {
        img: 'images/021.png',
        title: 'Дырявый парашют'
    },
    {
        img: 'images/022.png',
        title: 'Наперсток удачи'
    },
    {
        img: 'images/023.png',
        title: 'Рука для fisting',
        count: 5,
    },
    {
        img: 'images/024.png',
        title: 'Тотем мошны',
        isNotSlot: true
    },
    {
        img: 'images/025.png',
        title: 'Плюсовый блокнот',
        isNotSlot: true
    },

    {
        img: 'images/026.png',
        title: 'Интрига',
        isNotSlot: true
    },
    {
        img: 'images/027.png',
        title: 'Однорукий бандит',
        isNotSlot: true
    },
    {
        img: 'images/028.png',
        title: 'Грязнулькин',
        isNotSlot: true
    },
    {
        img: 'images/029.png',
        title: 'Лепреконий схрон',
        isNotSlot: true
    },
    {
        img: 'images/030.png',
        title: 'Заначка Старыги',
        isNotSlot: true
    },
    {
        img: 'images/031.png',
        title: 'Стример не тупой',
        isNotSlot: true
    },
    {
        img: 'images/032.png',
        title: 'Аптечка',
        isNotSlot: true
    },
    {
        img: 'images/033.png',
        title: 'Mine now TriHard',
        isNotSlot: true
    },
    {
        img: 'images/034.png',
        title: 'Удачный неудачник',
        isNotSlot: true
    },
    {
        img: 'images/035.png',
        title: 'Торопыга',
        isNotSlot: true
    },
    {
        img: 'images/036.png',
        title: 'Бог любит троицу',
        isNotSlot: true
    },
    {
        img: 'images/037.png',
        title: 'Орел или решка',
        isNotSlot: true
    },
    {
        img: 'images/038.png',
        title: 'А где это я?',
        isNotSlot: true
    },
    {
        img: 'images/039.png',
        title: 'Я здесь закон',
        isNotSlot: true
    },
    {
        img: 'images/040.png',
        title: 'Выбор бумера',
        isNotSlot: true
    },
    {
        img: 'images/041.png',
        title: 'Выбор зумера',
        isNotSlot: true
    },
    {
        img: 'images/042.png',
        title: 'Мистер Ржавчик',
        isNotSlot: true
    },
    {
        img: 'images/043.png',
        title: 'Всепоглощающий свин',
        isNotSlot: true
    },
    {
        img: 'images/044.png',
        title: 'Грабли',
        isNotSlot: true
    },
    {
        img: 'images/045.png',
        title: 'Тормознутый',
        isNotSlot: true
    },
    {
        img: 'images/046.png',
        title: 'Крыса',
        isNotSlot: true
    },
    {
        img: 'images/047.png',
        title: 'УВЫ',
        isNotSlot: true
    },
    {
        img: 'images/048.png',
        title: 'Часовой рост',
        isNotSlot: true
    },
    {
        img: 'images/049.png',
        title: 'Часы перемен',
        count: 3,
    },
    {
        img: 'images/050.png',
        title: 'Инструменты клоуна',
        count: 2,
    },
    {
        img: 'images/051.png',
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

