// Находим кнопку по id
const button1 = document.getElementById('exercise-1');

// Добавляем обработчик события
button1.addEventListener('click', function() {
    const Numbers = [1, 5, 4, 10, 0, 3];

    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] === 10) break;
        console.log(Numbers[i]);
    }

}
);

const button2 = document.getElementById('exercise-2');

button2.addEventListener('click', function() {

    const Numbers1 = [1, 5, 4, 10, 0, 3];  
  
    if (Numbers1.includes(4)) {
    console.log(`Индекс цифры 4: ${Numbers1.indexOf(4)}`);
    } else {
    console.log("Цифра 4 не найдена");
    }  
});

const button3 = document.getElementById('exercise-3');

button3.addEventListener('click', function() {
    
    const Numbers2 = [1, 3, 5, 10, 20];

    const separateSdpaces = Numbers2.join(' ')

    console.log(separateSdpaces);
});

const button4 = document.getElementById('exercise-4');

button4.addEventListener('click', function() {
   
   const transportArray = [
    ['Поезда', 'скоростной', 'грузовой'], 
    ['Автомобиль', 'легковой', 'грузовой'], 
    ['Самолет', 'пассажирский', 'транспортный']
    ];

    for (let item of transportArray) {
    for (let i = 0; i < item.length; i++) {
      if (i === 0) {
         console.log(`Тип транспорта ${item[i]}`);
      } else {
         console.log(`${item[0]}: ${item[i]}`);
      }
   }
}

});    

const button5 = document.getElementById('exercise-5');

button5.addEventListener('click', function() {
    
    const addArr1 = [1, 1, 1];

    addArr1.push(2, 2, 2);

    console.log(addArr1);
});


const button6 = document.getElementById('exercise-6');

button6.addEventListener('click', function() {

    

    const getCube = (n) => {
        
        if (isNaN(n)) {
            return 'Переданный параметр не является числом';
        } else {
            return `${n} в кубе равняется ${n ** 3}`;
        }
    }

    let n = Number(prompt('Введите число'));
    console.log(getCube(n));

    for (let i = 0; i <= 10; i ++) {
        console.log(getCube(i));
        
    }

});
      

const button7 = document.getElementById('exercise-7');

button7.addEventListener('click', function() {

    function createCircle(radius) {
        return{
            radius,
            getArea() {
            return Math.PI * this.radius ** 2;
            },
            getPerimeter() {
            return 2 * Math.PI * this.radius;
            },
        };
    }


    
    
    const circle1 = createCircle(Number(prompt('Введите радиус первого круга')));
    const circle2 = createCircle(Number(prompt('Введите радиус второго круга')));

    console.log(`Прошадь 1-й окружности равна: ${circle1.getArea()}`);
    console.log(`Длина 1-й окружности равна: ${circle1.getPerimeter()}`);
    console.log(`Прошадь 2-й окружности равна: ${circle2.getArea()}`);
    console.log(`Длина 2-й окружности равна: ${circle2.getPerimeter()}`);


});

