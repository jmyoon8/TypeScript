"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const sampleTodos:TodoItem[]=data.map(
//     (item,index)=>new TodoItem(item.id, item.task, item.complete)
// )
// const myTodoCollection=new TodoCollection("YJJ",sampleTodos)
// console.log(`${myTodoCollection.userName}`)
// myTodoCollection.getTodoById(1)?.printDetails()
// myTodoCollection.addTodo("집에가기")
// myTodoCollection.markComplete(3,true)
// myTodoCollection.todoItems.map((item)=>item.printDetails())
//타입 스크립트 기본
//기본
let bool = false;
let str = "str";
let number = 1;
//리스트
let list = [1, 2, 3];
let strList = ["1", "2", "3"];
//튜플
let x;
x = ["1", 1]; //성공
//  x=[1,"1"] //실패
//이후 배열처럼 접근하여 문자열 함수같은  관련된 기능을 쓸 수있다.
//열거
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue; //2
let a = Color[2]; //blue
console.log(a);
//Any는 어떠한 값도 들어올수 있는 타입
//void는 함수의 반환값이 없을떄 사용한다.
//object는 오브잭트 타입을 말한다 사실 이방법보단 인터페이스를 활용하여  프로퍼티를 명시하는게 더 좋다
const name = (obj) => {
    console.log(obj.ccf);
};
name({ ccf: "dasdd" });
//타입 단언
let someValue = "this is a string";
//someValue의 타입은 any이고 들어온값은 string이다
//때문에 string 함수를 사용하기위해  someValue를 string이라고 단언(프로그래머가 단언) 하여 함수(length)를 쓸수 있도록한다. (단언을 안하고 해도 상관없지만 그렇게되면 관련된 기능을 자동완성 할 수 없다. )
let strLength = someValue.length; //혹은 let strLength1:number=(someValue as string).length //으로 as 으로 사용 할 수있다.
console.log(strLength);
//인터페이스 타입검사를 위한 강력한 도구 
//아래의 경우를
const printLabel = (lableObj) => {
    console.log(lableObj.label);
};
const myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);
// 다음과같이 파라미터의 타입을 정해 줄 수있다.
const printLabel1 = (myObj) => {
    console.log(myObj.label);
};
printLabel1(myObj);
const createSqure = (config) => {
    let newSqure = { color: "", area: 0 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    console.log(newSqure);
    return newSqure;
};
//여기서 항상 파라미터에 모든 프로퍼티를 포함할 필요가없다
console.log(createSqure({ color: 'white' }));
let p1 = { x: 1000, y: 2000 };
// p1.x=1000 결과는 에러 realonly속성은 처음 할당됨 값이외에 값이 들어올경우 타입에러방생
//마찬가지로 array도 이처럼 리드온니 타입을 재공한다
let ab = [1, 2, 3, 4];
let ra = ab;
// ra[0]=2 처음 할당된 array의 인덱스는 변경 불가능 때문에 인덱스가 바뀌는 배열함수는 사용 불가능
ab = ra; //하지만 타입 단언으로 오버라이드 가능
console.log(ab);
//초과 프로퍼티 검사 : 기본적으로 typescript는 인터페이스에 없는 프로퍼티가 들어온다면 에러를 발생시키지만 타입단언으로 에러를 발생시키지 않을 수 있다
//아래처럼 파라미터 타입과 다른 프로퍼티가 파라미터로 들어온다면 에러를 발생시키지만 타입단어를 통해 에러를 피해 갈 수 있다 (원래는 color이 들어가야한다)
createSqure({ colour: 'red', width: 100 });
//하지만 더 좋은 방법은 문자열 인덱스 서명(인덱스 시그니처)을 추가하는것이 더 나은 방법 입니다 80줄로가보자(80줄에 [props:string]:any)
createSqure({ colour: 1, width: 100 });
//초과 프로퍼티 검사를 피할 수 있는 마지막 방법은 JSON을 변수에 할당하여 피하는방법이다
let s = { colour: "22", width: 200 };
createSqure(s);
let myFunc = (param1, param2) => {
    let search = param1.search(param2);
    return search > -1;
};
console.log(myFunc("123", "4"));
let myArray = ["Bob", "Fred"];
let myStr = myArray[0];
let info = {
    id: 'sksk',
    pass: 1234
};
//json으로 표현
let hy = {
    interval: 1,
    reset: (number, string) => {
        console.log(number, string);
    }
};
hy.reset(1, "d");
hy.interval = 1;
//function으로 표현
const value = () => {
    let hy = {
        interval: 1,
        reset: (number, string) => {
            console.log(number, string);
        }
    };
    return hy;
};
value().reset(1, "d");
console.log(value());
