// Условные операторы
// 1.	Если а – четное посчитать а*б, иначе а+б
const state1=(a,b) =>{
    if (a&1) {
        c=a*b;
        console.log(c)
    }
    else {
        c=a+b;
        console.log(c);
    }
    }
    state1(7,4)

// 2.	Определить какой четверти принадлежит точка с координатами (х,у)
const state2=(x,y) =>{


    if ((x>0)&&(y>0)){
        console.log ('I');
    }
    else if ((x>0)&&(y<0)){
        console.log ('IV');
    }
    else if ((x<0)&&(y>0)){
        console.log ('II');
    }
    else {
        console.log ('III');
    }
    }
    state2(4,5)


//3.	Найти суммы только положительных из трех чисел

const state3=(j,k,n) =>{


    if ((j>0)&&(k>0)&&(n>0)){
        console.log (j+k+n);
    
    }
    else if ((j<0)&&(k>0)&&(n>0)){
        console.log ('Вы ввели отриательное число в переменную J');
    }
    else if ((j>0)&&(k<0)&&(n>0)){
        console.log ('Вы ввели отриательное число в переменную K');
    }
    else {
        console.log ('Вы ввели отриательное число в переменную N');
    }
    }
    state3(3,5,1)

//4.	Посчитать выражение макс(а*б*с, а+б+с)+3
const state4=(z,q,p) =>{
    max=null;
    
    if ((z+q+p) > (z*q*p))
    {
        max= (z*q*p) +3;
        console.log(max);
    }
    else 
    {
        max= (z+q+p)+3;
        console.log(max);
    }
    }
    state4(5,0,5)

// 5.	Написать программу определения оценки студента по его рейтингу
 
const task=(mark) =>{
    if ((mark>=0)&&(mark<=19)){
        console.log('F');
   }
   else if ((mark>=20)&&(mark<=9)){
       console.log('E');
   }
   else if ((mark>=40)&&(mark<=59)){
       console.log('D');
   }
   else if ((mark>=60)&&(mark<=74)){
       console.log('C');
   }
   else if ((mark>=75)&&(mark<=89)){
       console.log('B');
   }
   else if ((mark>=90)&&(mark<=100)){
       console.log('A');
   }
   else {
       console.log('Некорректна оценка');
   }
   }
   task(87)

   // Циклы
   // 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99
   const cycles1=() =>{

    let k = 0;
    sum= 0;
    
    for (let i=1; i<100; i++)
    {
        if(i%2==0)
        {
        k++;
        sum +=i;
        }
    }
    console.log('Сумма чётных чисел от 1 до 99 равно:', sum )
    console.log('Колличество четных чисел от 1 до 99 равно:', k)
    }
    cycles1()

   //2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
   const cycles2=(a) =>{

 
    let simple = true;
    for(let i = 2; i<a; i++){
      if(a%i === 0)
      simple = false
    }
    console.log(simple? 'простое' : 'состваное');
  }
  cycles2(7)

   //3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
   //3_1
   const cycles3_1=(p) =>{

    for(let i = 0; i< p; i++){
      if((p/i) === i){
        console.log(i);
        break;
      }
    }
    }
    cycles3_1(169)
    // 3_2 binary
    const cycles3_2 = (value) =>{
        let end = value;
        let start = 0;
        let flag = false;
        let middle;
        while (start <= end && !flag) {
            middle = Math.floor((end - start)/2);
            if ((start + middle) * (start + middle) <= value && (start + middle + 1) * (start + middle + 1) > value) {
                flag = true;
                 console.log (`Корень натурального числа равен ${middle + start}`);
            } else if ((start + middle) * (start + middle) < value) {
                start = start + middle + 1;
            } else end = middle - 1;
        }
      }
      cycles3_2(9)
   //4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
   const cycles4 = (n) =>{
       for(let i = n; --i;) {
        n *= i;
    }console.log(n)
    }
    cycles4(5)

   //5.	Посчитать сумму цифр заданного числа
   const cycles5 = (n) =>{
   
    n = 742;
    sum=null;
    remain=null;
    while(n)
      {
          remain = n % 10;
            n = (n - remain)/10;
            sum += remain;
    
      }
    console.log(sum);
    }
    cycles5(5)

   //6.	Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321
   const cycles6 = (s) =>{
   
    let x = 0;
    while (s > 0) {
      x = x*10 + s%10;
      s = ~~(s / 10);
      
    }
    console.log (x);
  }
  cycles6(123)

   //Одномерные массивы
   //1.	Найти минимальный элемент массива0
   //2.	Найти максимальный элемент массива
   //3.	Найти индекс минимального элемента массива
   //4.	Найти индекс максимального элемента массива
   //5.	Посчитать сумму элементов массива с нечетными индексами 
   //6.	Сделать реверс массива (массив в обратном направлении) 
   const array = (arr) =>{

    max = null;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
           max = arr[i];
        }
    
    }
    console.log('Максимальное число в массиве '+ '' +max);
    
    let min=null;
        
        for(let i=0; i<arr.length; i++){
    
            if(arr[i]<min) min=arr[i];
        }
    console.log('Минимальное число в массиве '+ '' +min);
    
    min=null;
        let minIndex=0;
        for(let i=0; i< arr.length; i++){
            if( arr[i]<min){
                min= arr[i];
                minIndex=i;
            }
        }
        console.log('Индекс минимального числа в массиве'+ ' ' + minIndex);
    
    max= null;
        let maxIndex=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i];
                maxIndex=i;
            }
        }
        console.log('Индекс максимального числа в массиве'+ ' ' + maxIndex);
    
      let sumIndex=0;
        
        for(let i=1; i<arr.length;i+=2) 
        sumIndex+=arr[i];
        console.log('Cумма элементов массива с нечетными индексами '+ ' ' +sumIndex);
    
      arr.reverse();
    
    console.log( arr ); 
    }
    
    
    const arr=[12, -123, 55, 22, -777, 11];
    array(arr)

   //7.	Посчитать количество нечетных элементов массива
   const array1=(arrAdd) =>{

    let k=null;
    for (let i=0; i<arrAdd.length; i++)
    {
      if(arrAdd[i]%2!=0)
      {
         k++
      }
    }
    console.log(k);
    }
    const arrAdd=[1,2,3,4,5,6,7,8,4,2,4,6,7,8,9];
    array1(arrAdd)

   //8.	Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
   
   const array2=(array) =>{
    console.log(array.slice(array.length/2, array.length).concat(array.slice(0, array.length/2)))
    }
    const array = [1,2,3,4,5,6]
    array2(array)

   //9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 
   //пузырьком (Bubble)
   const array3=(arr) =>{
    const bubble = arr => {
        const length= arr.length;
    
        for (let i= length; i> 0; i--){
            for (let y = 0; y< i-1; y++){
    
        if (arr[y] > arr[y+1]){
            const tmp = arr[y];
            arr[y] = arr[y+1];
            arr[y+1] = tmp;
        }
            }
        }
        return arr;
    }
    console.log(bubble(arr));
    }
    const arr= [1, -5, 7, 6, 42, 44, 12, 22];
    array3(arr)

    //вставками (Insert)
    const array4=(arr) =>{
        for ( let i=0; i<arr.length; i++)
        {
          let g=arr[i]; j=i-1;
          while((j>=0)&&(arr[j]<g))
          {
            arr[j+1]=arr[j]; j--;
          }
          arr[j+1]=g;
        }
        console.log(arr);
        }
        const arr= [1, -5, 7, 6, 42, 44, 12, 22];
        array4(arr)

    //выбором (Select)
    const array5=(arr) =>{
        for( let i=0; i<arr.length-1;i++)
          { let min=i;
            for(let j=i+1;j<arr.length; j++)
            {
              if(arr[j]<arr[min])
              {
                min=j;
              }
            }
             let t=arr[min];
              arr[min]=arr[i];
              arr[i]=t;
          }
        console.log(arr);
        }
        const arr= [1, -5, 7, 6, 42, 44, 12, 22];
        array5(arr)

   //10.	Отсортировать массив (Quick, Merge, Shell, Heap)
   //QuickSort
   const ar = [21, -11, 17, -44, 42, 44, 12, 22];

   const partition = (ar, low, hi) => {
     const pivotPosition = Math.floor(Math.random() * ar.length);
     const pivot = ar[pivotPosition];
     while (hi >= low) {
       while (ar[hi] > pivot){
         hi--;
       }
       while (ar[low] < pivot) {
         low++;
       }
       if (hi >= low){
         const tmp = ar[low];
         ar[low] = ar[hi];
         ar[hi] = tmp;
         hi--;
         low++;
       }
     }
     return low;
   };
   const qsort = (ar, low=0, hi = ar.length-1) => {
     if (low <hi){
       const index= partition (ar,low,hi);
       qsort(ar, low, index-1);
       qsort(ar,index,hi);
     }
     return ar;
   };
   console.log(qsort(ar));

   //HeapSort
   var array_length;

   function heap_root(input, i) {
       var left = 2 * i + 1;
       var right = 2 * i + 2;
       var max = i;
   
       if (left < array_length && input[left] > input[max]) {
           max = left;
       }
   
       if (right < array_length && input[right] > input[max])     {
           max = right;
       }
   
       if (max != i) {
           swap(input, i, max);
           heap_root(input, max);
       }
   }
   
   function swap(input, index_A, index_B) {
       var temp = input[index_A];
   
       input[index_A] = input[index_B];
       input[index_B] = temp;
   }
   
   function heapSort(input) {
       
       array_length = input.length;
   
       for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
           heap_root(input, i);
         }
   
       for (i = input.length - 1; i > 0; i--) {
           swap(input, 0, i);
           array_length--;
         
         
           heap_root(input, 0);
       }
   }
   
   var arr = [21, -11, 17, -44, 42, 44, 12, 22];
   heapSort(arr);
   console.log(arr);

   //Функции

   //1.	Получить строковое название дня недели по номеру дня. 
   const func1=(number) =>{

    switch(number){
        case 1: 
        console.log("Monday");
        break;
        case 2: 
        console.log("Tuesday");
        break;
        case 3: 
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5: 
        console.log("Friday");
        break;
        case 6: 
        console.log("Saturday");
        break;
        case 7: 
        console.log("Sunday");
        break;
        default: 
        console.log("ERROR!");
    }
}
func1(6);

   //2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.
   
   const func2=(p1,p2) =>{

    const DistanceBetweenPoints = (p1,p2) => 
    ((p2.x-p1.x)**2+(p2.y-p1.y)**2)**0.5;
  console.log(DistanceBetweenPoints(p1,p2));
}
func2({x:20,y:-20}, {x:40,y:10})
  