import getProductions from "../store/goods.js";

export default {

    /**
     * @param {String} name имя товара, нечувствительно к регистру
     * @param {Number} maxPrice максимальная цена товара
     * @param {Number} minPrice минимальная цена товара
     * @param {Number} itemOnPage количество товаров на странице
     * @param {String} sortByPrice 'decrease' or 'increase' - ключевые слова для сортировки
     * @param {Number} pages количетсво страниц для просмотра
     * @param {String} look вид отображение карточек товаров
     * @param {Array} goods массив всех товаров
     * @param {Array} selectColor массив выбранного цвета товара
     * @param {Array} itemsInCart все товары, добавленные в корзину
     * @param {Number} sumPrice суммарная стоимость все товаров в корзине
     */
    state: {
        name: null,
        maxPrice: null,
        minPrice: null,
        pageNumber: null,
        itemOnPage: null,
        sortByPrice: '',
        pages: null,
        look: "table",
        goods: [],
        selectedColor: null,
        itemsInCart: JSON.parse(localStorage.getItem('itemsInCart')) || [],
        sumPrice: Number(localStorage.getItem('sumPrice')) || 0,
    },

    mutations: {
        /**
         * @param {Object} state смотреть выше
         * @param {Array} data массив всех товаров
         */
        setGoods(state, data) {
            state.goods = data.products;
            state.pages = data.pages;
        },

        /**
         * @param {Object} state смотреть выше
         * @param {String} view наименование вида отображения товаров
         */
        changeView(state, view) {
            state.look = view;
        },

        /**
         * @param {Object} state смотреть выше 
         * @param {Number} page номер страницы
         */
        changePage(state, page) {
            state.pageNumber = page;
        },

        /**
         * @param {Object} state смотреть выше
         * @param {Array} color массив выбранного цвета товара
         */
        changeColor(state, color) {
            state.selectedColor = color;
        }
    },

    actions: {
        /**
         * @param {*} ctx 
         * @param {Object} parameters параметры запроса
         */
        async loadGoods(ctx, parameters) {
            const data = (await getProductions(
                parameters
            ));
            ctx.commit('setGoods', data);
        },

        table(ctx) {
            const view = "table"
            ctx.commit('changeView', view);
        },

        list(ctx) {
            const view = "list"
            ctx.commit('changeView', view);
        },

        /**
         * @param {*} ctx 
         * @param {Number} list номер страницы
         */
        page(ctx, list) {
            const page = list;
            ctx.commit('changePage', page);
        },

        /**
         * @param {*} ctx 
         * @param {Array} bloom массив цветов товаров
         */
        selectColor(ctx, bloom) {
            const color = bloom;
            ctx.commit('changeColor', color);
        }
    }
}