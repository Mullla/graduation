const getRepairTypes = () => {
    const url = './db/db.json';
    // info получаем данные из json-файла
    const getData = (url, render, changeTabs) => {
        
        return fetch(url)
        .then( response => {
            if(response.ok){
                return response.json();;
            } else {
                throw new Error(response.statusText);
            }
        })
        .then( response => {
            render(response);
            return response;
        })
        .then ( response => {
            changeTabs(response);
        })
        .catch( err => {
            console.log(err);
        });

    }

    getData(url, dbData => render(dbData), dbData => changeTabs(dbData));

    const render = (dbData) => {
        const repairTypes = [...dbData].splice(1);

        // tab block
        // блок со списком кнопок
        createNavList(repairTypes);

        // content block
        // заголовок и дата
        createRepairContent(dbData);

        // рендер таблтцы стоимости и услуг
        renderTable(repairTypes);
        
    }

    // создается список из кнопок, заполняется из массива услуг
    const createNavList = (array) => {
        const navList = document.querySelector('.nav-list-popup-repair');

        array.forEach(elem => {
            navList.append(createNavItem(elem.title));
        });
    }

    // создается один элемент списка - кнопка
    const createNavItem = (itemTitle) => {
        const btn = document.createElement('button');
        btn.classList.add('button_o', 'popup-repair-types-nav__item');
        btn.textContent = itemTitle;

        return btn;
    }

    // создается верхняя часть контента - где заголовок и дата
    const createRepairContent = (dbData, id = 1) => {
        const contentTitle = document.querySelector('.popup-repair-types-content__head-title'),
            contentDate = document.querySelector('.popup-repair-types-content__head-date');

            
            contentTitle.textContent = dbData[id].title;
            contentDate.textContent = dbData[0].date;
    }

    // создается таблица с услугами и стоимостью
    const createTable = (array) => {
        const tableList = document.querySelector('.popup-repair-types-content-table__list > tbody');

        // очищаю, чтобы списки не суммировались
        tableList.innerHTML = '';

        array.forEach(elem => {
            tableList.append(createTableItem(elem));
        })
    }

    // создается элемент таблицы
    const createTableItem = (elem) => {
        const item = document.createElement('tr');
        item.classList.add('mobile-row');

        let unit = '';
        if(elem.units === 'м2'){
            unit = `м<sup>2</sup>`;
        } else {
            unit = elem.units;
        }

        item.innerHTML = `
            <td class="repair-types-name">${elem.typeService}</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
            <td class="repair-types-value">${unit}</td>
            <td class="repair-types-value">${elem.cost} руб.</td>
        `;

        return item;
    }

    // in: массив из объектов(dbData), id объекта
    const renderTable = (arr, id = 0) => {
        createTable(arr[id].priceList);
    }

    const changeTabs = (dbData) => {
        const tabBtns = document.querySelectorAll('.popup-repair-types-nav__item');

        tabBtns.forEach( btn => {
            btn.addEventListener('click', () => {

                const index = dbData.findIndex(item => item.title === btn.textContent);

                createRepairContent(dbData, index);
                renderTable(dbData, index);

            });
        });

        
    }
}

export default getRepairTypes;