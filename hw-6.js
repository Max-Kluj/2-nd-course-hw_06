// Находим кнопку по id
const button1 = document.getElementById('exercise-1');

// Добавляем обработчик события
button1.addEventListener('click', function() {
    const compare = () => {

        let a = Number(prompt('Введите 1-ю цифру'));
        let b = Number(prompt('Введите 2-ю цифру'));

        return a >b ? a : b;
        
    }

    console.log(compare());
}
);

const button2 = document.getElementById('exercise-2');

button2.addEventListener('click', function() {
  const even = () => {
    let c = Number(prompt('Введите число'));

        if (c % 2 === 0) {
            console.log(`Число ${c} четное`);
        } else {
            console.log(`Число ${c} не четное`);
        }
  }

  even();
    
});

const button3 = document.getElementById('exercise-3');

button3.addEventListener('click', function() {
    
    let num = Number(prompt('Введите число'));
    
    const printSquare = (n) => {
        
        console.log(num ** 2);
    
    }

    const getSquare = (n) => n ** 2;

    printSquare(num);

    const result = getSquare(num);
    console.log(result);
     
});

const button4 = document.getElementById('exercise-4');

button4.addEventListener('click', function() {
   function correctAge(age) {
        if (age < 0) {
            return `Вы ввели неправильное значение`;
        } else if (age >= 0 && age <= 12) {
            return `Привет, друг!`;
        } else {
            return `Добро пожаловать!`;
        }
   }

   alert(correctAge(prompt("Сколько вам лет?")));
    
});    

const button5 = document.getElementById('exercise-5');

button5.addEventListener('click', function() {
    
    let d = Number(prompt('Введите первое число'));
    let e = Number(prompt('Введите второе число'));

    function multiply(d, e) {
        if (isNaN(d) || isNaN(e)) {
            return `Одно или оба значения не являются числом`;
        } else {
            return d * e;
        }
    }

    console.log(multiply(d, e));

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

