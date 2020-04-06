// document.addEventListener("DOMContentLoaded", () => {
//     const start = document.querySelector("#start"),
//         end = document.querySelector("#end"),
//         dayThis = document.querySelector(".day_this"),
//         moneyThis = document.querySelector(".money_this"),
//         compareRange = document.querySelector(".compare-range"),
//         dayOther = document.querySelector(".day_other"),
//         moneyOther = document.querySelector(".money_other");
//     const data = [
//         [[], [1, 6500, 2, 15000], [2, 12000, 4, 30000], [3, 18000, 7, 252000], [4, 24000, 12, 425000], [6, 10000, 23500, 25220]],
//         [[], [], [1, 700, 2, 25000], [2, 12000, 3, 5400], [12, 4100, 523, 41000], [5, 15, 456500, 852]],
//         [[], [], [], [1, 700, 2, 25000], [3, 425, 45, 54200], [4, 12000, 5, 12300]],
//         [[], [], [], [], [1, 700, 2, 25000], [4, 25000, 4, 12000]],
//         [[], [], [], [], [], [1, 700, 2, 25000]]
//     ];
//     // склонение месяцев в зависимости от цифр
//     const declOfNum = (n, t) => t[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(n % 10 < 5) ? n % 10 : 5]]

//     const showResult = array => {
//         const [dayT, moneyY, dayO, moneyO] = array;
//         const month = ["Месяц", "Месяца", "Месяцев"];
//         // console.log(array);
//         dayThis.textContent = dayT + " " + declOfNum(dayT, month);
//         moneyThis.textContent = moneyY + " грн.";
//         dayOther.textContent = dayO + " " + declOfNum(dayO, month);
//         moneyOther.textContent = moneyO + " грн.";
//     };

//     const calcResult = () => {
//         const startValue = parseInt(start.value);
//         const endValue = parseInt(end.value);

//         if (startValue === endValue) {
//             // debugger;
//             showResult([0, 0, 0, 0]);
//         } else {
//             showResult(data[startValue][endValue]);  // или если удалить в data путсые массивы то можно вот так showResult(data[startValue][endValue - startValue -1]);
//         }
//         console.log(startValue + " and " + endValue);
//     };

//     function handler() {
//         // debugger;
//         if (start.value > end.value) {
//             // start.value = end.value = this.value;
//             start.value = this.value;  // 5
//             end.value = this.value;
//             console.log(this);
//         };
//         calcResult();
//     };

//     const changeRange = (event) => {
//         const target = event.target;
//         // console.log(target);
//         if (target.classList.contains("change_range")) {

//             const parent = target.closest("#started") || target.closest("#ended");
//             const range = parent.querySelector(".range");

//             range.value = target.dataset.level;
//             handler.apply(range);  // без этого не корректно срабатывает переключение или "call"
//         };
//     };

//     start.addEventListener("change", handler);
//     end.addEventListener("change", handler);
//     compareRange.addEventListener("click", changeRange);
//     document.querySelectorAll(".change_range").forEach(el => el.style.cursor = "pointer");  
//     calcResult();
// });




// "use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

document.addEventListener("DOMContentLoaded", function () {
    var start = document.querySelector("#start"),
        end = document.querySelector("#end"),
        dayThis = document.querySelector(".day_this"),
        moneyThis = document.querySelector(".money_this"),
        compareRange = document.querySelector(".compare-range"),
        dayOther = document.querySelector(".day_other"),
        moneyOther = document.querySelector(".money_other");
    var data = [[[], [1, 6500, 2, 15000], [2, 12000, 4, 30000], [3, 18000, 7, 252000], [4, 24000, 12, 425000], [6, 10000, 23500, 25220]], [[], [], [1, 700, 2, 25000], [2, 12000, 3, 5400], [12, 4100, 523, 41000], [5, 15, 456500, 852]], [[], [], [], [1, 700, 2, 25000], [3, 425, 45, 54200], [4, 12000, 5, 12300]], [[], [], [], [], [1, 700, 2, 25000], [4, 25000, 4, 12000]], [[], [], [], [], [], [1, 700, 2, 25000]]]; // склонение месяцев в зависимости от цифр

    var declOfNum = function declOfNum(n, t) {
        return t[n % 100 > 4 && n % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][n % 10 < 5 ? n % 10 : 5]];
    };

    var showResult = function showResult(array) {
        var _array = _slicedToArray(array, 4),
            dayT = _array[0],
            moneyY = _array[1],
            dayO = _array[2],
            moneyO = _array[3];

        var month = ["Месяц", "Месяца", "Месяцев"]; // console.log(array);

        dayThis.textContent = dayT + " " + declOfNum(dayT, month);
        moneyThis.textContent = moneyY + " грн.";
        dayOther.textContent = dayO + " " + declOfNum(dayO, month);
        moneyOther.textContent = moneyO + " грн.";
    };

    var calcResult = function calcResult() {
        var startValue = parseInt(start.value);
        var endValue = parseInt(end.value);

        if (startValue === endValue) {
            // debugger;
            showResult([0, 0, 0, 0]);
        } else {
            showResult(data[startValue][endValue]); // или если удалить в data путсые массивы то можно вот так showResult(data[startValue][endValue - startValue -1]);
        }

        console.log(startValue + " and " + endValue);
    };

    function handler() {
        // debugger;
        if (start.value > end.value) {
            // start.value = end.value = this.value;
            start.value = this.value; // 5

            end.value = this.value;
            console.log(this);
        }

        ;
        calcResult();
    }

    ;

    var changeRange = function changeRange(event) {
        var target = event.target; // console.log(target);

        if (target.classList.contains("change_range")) {
            var parent = target.closest("#started") || target.closest("#ended");
            var range = parent.querySelector(".range");
            range.value = target.dataset.level;
            handler.apply(range); // без этого не корректно срабатывает переключение или "call"
        }

        ;
    };

    start.addEventListener("change", handler);
    end.addEventListener("change", handler);
    compareRange.addEventListener("click", changeRange);
    document.querySelectorAll(".change_range").forEach(function (el) {
        return el.style.cursor = "pointer";
    });
    calcResult();
});