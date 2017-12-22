// создаём функцию конструктор //добавим в аргумент конструктора isDone
function Task(text, isDone) {
    this.text = text;
    // добавим сравнение или '||'
    this.isDone = isDone || false;
}
// создадим метод 'сделано'
// //меняет свойство объекта исДан
  //на противоположное
 Task.prototype.done = function() {     
        this.isDone = !this.isDone;
    }
    // созд метод el
Task.prototype.el = function(n) {
    // созд элемент 'ли' и поместим туда резуль инпута
    var el = document.createElement('li');
    //в элемент поместим введенный текст инпута
    el.innerText = this.text;
    // созд кнопку 'сделано'
    var done = document.createElement('button');
    //на кнопке напишем
    done.innerText = 'сделано';
    //if добавляем для извлечения состояния из локал сторадж
    if (this.isDone) {
        //если true то и тогда добавляем класс passed к элементу 'el'
        el.classList.add('passed');
    }
    //сохраним this в переменную self
    var self = this;
    // done.classList.add('done'); // эти классы добавлять не обязательно
    // по клику вызовем метод 'доне'
    done.addEventListener('click', function() {
        self.done();
        // и поменяем класс у 'el' то есть у li
        el.classList.toggle('passed');
        //и все это сохраним в local storage
        list.save();
    });
    // создаём кнопку удаления
    var remove = document.createElement('button');
    remove.innerText = 'удалить';
    // remove.classList.add('remove'); // эти классы добавлять не обязательно
    //навесим обработчик по клику
    remove.addEventListener('click', function() {
            //сначала удалим el из doom
            el.remove();
            //потом удалим таску(n) из массива
            delete list[n];
            //сохраним состояние
            list.save();
        })
        // добавим к элементу кнопки
    el.appendChild(remove);
    el.appendChild(done);
    // вернём элемент
    return el;
}
//созд констр обьекта для работы с localStorage
function List() {}
//присвоим ему свойства и методы массива
List.prototype = [];
// создадим метод сохранения массива тасок в localSor
List.prototype.save = function() {
    // var str = JSON.stringify(this);
    // localStorage.myApp = str;
    // УПРОЩЕНИЕ =>>>>
    // создадим метод localStoraga и сохраним в него json нашего объекта
    localStorage.myApp = JSON.stringify(this);
}

List.prototype.newTask = function (obj) {
    var task = new Task(obj.text, obj.isDone);
    //*меняем на obj.text, obj.isDone*//
    var num = this.push(task) - 1;
    document.querySelector('.list').appendChild(task.el(num));
}

// создаём пустой массив с методом save
var list = new List();
// если в localStorage что то записане то
if (localStorage.myApp) {
    // создаём и назначаем в переменную объект из localStorage
    var lastTasks = JSON.parse(localStorage.myApp);
    // удаляем у него свойство length
    delete lastTasks.length;
    // проганяем его через цикл 'for in'
    for (var i in lastTasks) {
        // =======================================//ВМЕСТО комент.СТРОК 83-87 создадим одну функцию newTask
        // var task = new Task(lastTasks[i].text, lastTasks[i].isDone);
        // //сохраняем номер добавленной в наш пустой массив таски
        // var num = list.push(task) - 1;
        // //в лист DOOM добавляем кажд. нов таску и элементом добав. её номер 'num'
        // document.querySelector('.list').appendChild(task.el(num));
        //======================================
        list.newTask(lastTasks[i]);
    }
}
//================ЭТА ЖЕ ФУНКЦИЯ НО С ОДНИМ АРГУМЕНТОМ
//ВМЕСТО выделенных одинаковых строк создадим одну функцию newTask
// function newTask(text, isDone) {
//    // с помощью ф.конструктора создаём по клику новую таску
//  var task = new Task(text, isDone);
// //добавляем каждую новую таску в массив и возвращаем её номер
// var num = list.push(task) - 1;
// //в лист DOOM добавляем кажд. нов таску и элементом добав. её номер 'num'
// document.querySelector('.list').appendChild(task.el(num));
// }
//==================



// function newTask(obj) {   // назначим функцию newTask методом конструктора массива List
//     //и перенесем туда же а это комментируем
//     var task = new Task(obj.text, obj.isDone);
//     //*меняем на obj.text, obj.isDone*//
//     var num = list.push(task) - 1;
//     document.querySelector('.list').appendChild(task.el(num));
// }


//выделяем кнопку ввода
var but = document.getElementById('but');
//навешиваем на неё событие
but.addEventListener('click', function() {
    console.log('hi');
    //*в переменную text передаём значение инпута*//
    var text = document.getElementById('inp').value;
    //*===================================И ВМЕСТО закомент. СТРОК 97-103 создадим функцию newTask
    //  // с помощью ф.конструктора создаём по клику новую таску
    //  var task = new Task(text);
    // //добавляем каждую новую таску в массив и возвращаем её номер
    // var num = list.push(task) - 1;
    // //в лист DOOM добавляем кажд. нов таску и элементом добав. её номер 'num'
    // document.querySelector('.list').appendChild(task.el(num));
    //===================================================*//
    list.newTask({
        text: text
    });
    //text меняем на obj.text
    // сохраняем состояние
    list.save();
});