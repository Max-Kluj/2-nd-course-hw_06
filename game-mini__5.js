const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];

let sumResult = 0

const answer1 = prompt(`${quiz[0].question}
Выберете номер ответа: ${quiz[0].options.join(' ')}`);

const answer2 = prompt(`${quiz[1].question}
Выберете номер ответа: ${quiz[1].options.join(' ')}`);

const answer3 = prompt(`${quiz[2].question}
Выберете номер ответа: ${quiz[2].options.join(' ')}`);

if (Number(answer1) === quiz[0].correctAnswer) sumResult++;
if (Number(answer2) === quiz[1].correctAnswer) sumResult++;
if (Number(answer3) === quiz[2].correctAnswer) sumResult++;

alert(`Правильных ответов: ${sumResult} из 3-х`);