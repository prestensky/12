/*
 * Copyright (c) 2020. shtrih
 */

const dataSets = {
    inventory: [
        'Стример не тупой',
        'Красочная манга',
        'Свиток реролла',
        'Мистер Ржавчик',
        'Четырёхлистный клевер',
        'Реверсивные сапоги',
        'Дырявый парашют',
        'Бог любит троицу',
        'Часовой рост',
        'Взрывчатка',
        'Шар всезнания',
        'Хук Пуджа',
        'Грабли',
        'Торопыга',
        'Очки EZ',
        'Крыса',
        'Интрига',
        'Рука для fisting',
        'Ремонтный набор',
        'Выбор бумера',
        'Парные кольца времени',
        'Удачный неудачник',
        'Орёл или решка',
        'А где это я',
        'Рука мидаса',
        'Аптечка',
        'Тухлая шаурма',
        'Тормознутый',
        'Туалетка',
        'Грязнулькин',
        'Увы',
        'Заначка Старыги',
        'Выбор зумера',
        'Шоколад',
        'Лепреконий схрон',
        'Плюсовый блакнот',
        'Повязка Рэмбо',
        'Инструменты клоуна',
        'Часы перемен',
        'Я здесь закон',
        'Штрафная Квитанция',
        'Напёрсток удачи',
        'Тотем мошны',
        'Всепоглощающий свин',
        'Чокер боли',
        'Однорукий бандит',
        'Корона Колесного короля',
        'MinenowTriHard',
        'Читерский кубик',
        'Полукаловая монетка',
        'Кубик хуюбика',
    ],
    effects: [
        'Красочная манга',
        'Шар всезнания',
        'Ремонтный набор',
        'Торопыга',
        'Инструменты клоуна',
        'Тотем мошны',
        'Читерский кубик',
        'Корона колесного короля',
        'Аптечка',
        'Парные кольца времени',
        'Четырёхлистный клевер',
        'Очки EZ',
        'Шоколад',
        'Свиток реролла',
        'Удачный неудачник',
        'Плюсовый блакнот',
        'Напёрсток удачи',
        'Туалетка',
        'Часы перемен',
    ],
    coin: [
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Ребро!',
    ],
    streamers: [
        'wei44th',
        'aloofaloof',
        'IvanGO',
        'kanoyaa',
        'skyfai_',
        'krispus',
        'KirdRey',
    ],
    debuffs: [
        'Кубик хуюбика',
        'Взрывчатка',
        'Реверсивные сапоги',
        'Дырявый парашют',
        'УВЫ',
        'Грязнулькин',
        'Стример не тупой',
        'Часовой рост',
        'Штрафная квитанция',
        'Повязка Рэмбо',
        'Однорукий бандит',
        'Mine now TriHard',
    ],
    podlyanki: [
        'Получите +1 к итоговому значению следующего броска.',
        'Получите -1 к итоговому значению следующего броска.',
        'Получите +2 к итоговому значению следующего броска.',
        'Получите -2 к итоговому значению следующего броска.',
        'Переместитесь на клетку "Аукошная" и пройдите там игру',
        'Переместитесь на клетку "Лотерея" и пройдите там игру.',
        'Переместитесь на клетку "Фул рандом" с противоположной от вас стороны и пройдите там игру.',
        'Получите 1 поинт.',
        'Потеряйте 1 поинт.',
        'Верхний порог времени следующей клетки ниже на 2 часа.',
        'Текущее преодоление всего игрового поля дает лишь 2 поинта, вместо 5.',
        'Вернитесь на клетку, с которой вы начинали текущий ход и совершите ход заново, сохранив эффекты событий и предметов, влияющих на движение.',
    ]
};
let currentDataSet = 'inventory',
    editedDataSets = {};

const editDialog = document.getElementById('dialog-edit'),
    editButton = document.getElementById('btn-edit'),
    editConfirmButton = editDialog.getElementsByClassName('apply')[0],
    editOptions = editDialog.getElementsByClassName('options')[0],
    editPresets = editDialog.getElementsByClassName('presets')[0],
    optionClick = function (option, checked) {
        editedDataSets[currentDataSet][option] = checked;
    },
    generateOptions = function (dataObject) {
        let options = '';
        for (let i in dataObject) {
            options += `<label><input type="checkbox" onchange="optionClick('${i}', this.checked)" ${dataObject[i] ? 'checked' : ''} />${i}</label><br />`;
        }

        return options;
    },
    resetEditedDataSet = function () {
        editedDataSets[currentDataSet] = Object.fromEntries(dataSets[currentDataSet].map(v => v).sort().map(v => [v, true]));
    },
    editedDataToArray = function () {
        let result = [];

        for (let [key, value] of Object.entries(editedDataSets[currentDataSet])) {
            if (value) {
                result.push(key)
            }
        }

        return result;
    }
;

editButton.addEventListener('click', function () {
    if (currentDataSet === 'custom') {
        p5Instance.mouseDragEnable(false);
        customDialog.style.display = 'block';

        return;
    }

    editDialog.style.display = 'block';
    p5Instance.mouseDragEnable(false);

    editPresets.innerHTML = '';
    editPresets.append(...presets.getNodes(currentDataSet));
    editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);
});
editConfirmButton.addEventListener('click', function () {
    editDialog.style.display = 'none';
    p5Instance.mouseDragEnable();

    p5Instance.setData(editedDataToArray());
});

class Preset {
    constructor(title, disabledEntries, isDefault) {
        this._title = title;
        this._disabledEntries = disabledEntries;
        this._isDefault = Boolean(isDefault);
    }

    get isDefault() {
        return this._isDefault;
    }

    get domNode() {
        const el = document.createElement('a');

        el.setAttribute('href', '#');
        el.appendChild(document.createTextNode(this._title));
        el.addEventListener('click', this.handleClick.bind(this));

        return el;
    }

    handleClick() {
        resetEditedDataSet();

        for(const i in this._disabledEntries) {
            if (editedDataSets[currentDataSet][this._disabledEntries[i]]) {
                editedDataSets[currentDataSet][this._disabledEntries[i]] = false;
            }
        }

        editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);

        return false;
    }
}

class PresetAll extends Preset {
    constructor(isDefault) {
        super('Выбрать всё', [], isDefault);
    }
}

class PresetWithoutSpecialRolls extends Preset {
    constructor(isDefault) {
        super(
            'Без спецроллов',
            [
                'Чуйка на говно',
                'Выбор Бумера',
                'Выбор Зумера',
                'Чат здесь закон',
                'Я здесь закон',
                'Never Lucky',
            ],
            isDefault
        );
    }
}

class Presets {
    constructor() {
        this._presets = {
            // inventory: [
            //     new PresetAll(),
            // ],
            effects: [
                new PresetAll(),
                new PresetWithoutSpecialRolls(true),
            ],
            debuffs: [
                new PresetAll(),
                new PresetWithoutSpecialRolls(true),
            ],
            streamers: [
                new PresetAll(),
            ],
        };
    }

    hasPreset(dataSetKey) {
        return !!this._presets[dataSetKey];
    }

    getNodes(dataSetKey) {
        let result = [];

        for(const i in this._presets[dataSetKey]) {
            if (i % 2) {
                result.push(document.createTextNode(', '));
            }
            result.push(this._presets[dataSetKey][i].domNode);
        }

        return result;
    }

    applyDefaults(dataSetKey) {
        for(const i in this._presets[dataSetKey]) {
            if (this._presets[dataSetKey][i].isDefault) {
                this._presets[dataSetKey][i].handleClick();
            }
        }
    }
}

const presets = new Presets;

function getImageURI(index) {
    let result = '../hpg-inventory/images/000.png',
        offset = 0
    ;
    switch (currentDataSet) {
        case "inventory":
            offset = 0;
        case "effects":
            const mapping1 = [
                '0'+1,
                '0'+3,
                '0'+5,
                '0'+6,
                '0'+8,
                '0'+9,
                10,
                13,
                15,
                18,
                19,
                22,
                24,
                25
            ];
            result = '../hpg-inventory/images/0' + (mapping[index]) + '.png';
            break;

        case "debuffs":
            const mapping = [
                '0'+2,
                '0'+4,
                '0'+7,
                12,
                20,
                21
            ];
            result = '../hpg-inventory/images/0' + (mapping[index]) + '.png';
            break;

        case "coin":
            result = '../images/coin-obverse-20.png';
            if (index === 1) {
                result = '../images/coin-reverse-20.png';
            }
            if (index === 10) {
                result = '../images/coin-gurt.png';
            }
            break;

        case "streamers":
            result = '../images/streamers/'+ dataSets[currentDataSet][index] +'.png';
            break;
    }

    return result;
}

const p5Instance = new p5(wheelSketch);

p5Instance.onAfterSetup = function () {
    p5Instance.setVideos([
        // 'videos/14278244937910.webm',
        'videos/ivango_upal.mp4',
        'videos/krispus_car.mp4',
        'videos/skyfai_cum.mp4',
        'videos/skyfai_koncha.mp4',
        'videos/aycelia_reklama.mp4',
        'videos/wei_aa.mp4',
        'videos/wei_vstal.mp4',
        'videos/aycelia_cs.mp4',
        'videos/wei_hi.mp4',
        'videos/kid-hitmanclub.mp4',
        'videos/europapa_only_pa.mp4',
        'videos/giovanni.mp4',
        'videos/ching.mp4',
        'videos/absolute.mp4',
    ]);
};

const image = document.querySelector('#item-image img');
p5Instance.onSelectItem = function(data, selectedKey) {
    if (dataSets[currentDataSet]) {
        image.src = getImageURI(dataSets[currentDataSet].indexOf(data[selectedKey]));
    }
    else {
        image.src = '../hpg-inventory/images/000.png';
    }
};

const customDialog = document.getElementById('custom-list'),
    customTextarea = customDialog.getElementsByTagName('textarea')[0],
    customButton = customDialog.getElementsByTagName('button')[0]
;

customButton.addEventListener('click', function () {
    customDialog.style.display = 'none';

    p5Instance.setData(customTextarea.value.split('\n'));
    p5Instance.mouseDragEnable();
});

let radios = document.querySelectorAll('[name="list"]');
for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        currentDataSet = this.value;

        if (this.value === 'custom') {
            p5Instance.mouseDragEnable(false);
            customDialog.style.display = 'block';

            return;
        }

        customDialog.style.display = 'none';
        p5Instance.mouseDragEnable();

        if (presets.hasPreset(currentDataSet)) {
            if (!editedDataSets[currentDataSet]) {
                resetEditedDataSet();
                presets.applyDefaults(currentDataSet);
            }

            p5Instance.setData(editedDataToArray());
            editButton.removeAttribute('disabled');
        }
        else {
            p5Instance.setData(dataSets[currentDataSet]);
            editButton.setAttribute('disabled', 'disabled');
        }
    });

    // Выбираем начальный вариант при загрузке страницы
    if (radios[i].hasAttribute('checked')) {
        radios[i].dispatchEvent(new Event('click'));
    }
}
