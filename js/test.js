///**
// * Created by M.Jin on 14-7-2.
// */
//// 'Lecture' 类的构造函数
//// 用名称（name）和教师（teacher）作为参数
//function Lecture(name,teacher){
//    //将参数保存为对象的局部属性 (local property)
//    this.name = name;
//    this.teacher = teacher;
//}
////Lecture 类的一个方法（method），用于生成一条显示Lecture信息的字符串
//Lecture.prototype.display = function(){
//    return this.teacher + "is teaching" + this.name;
//};
//
////Schedule 类的构造函数，以课程的数组作为参数
//function Schedule(lectures){
//    this.lectures = lectures;
//}
//
////构造一条字符串，表示课程的安排表
//Schedule.prototype.display = function(){
//    var str = '';
//
//    //遍历每项课程，建立包含它们信息的字符串
//    for(var i = 0;i < this.lectures.length; i++)
//        str += this.lectures[i].display() + " ";
//
//    return str;
//};
//
//var mySchedule = new Schedule([
//    new Lecture("Gym","Mr. Smith"),
//    new Lecture("Math","Mrs. Jones"),
//    new Lecture("English","TBD")
//]);
//
//alert(mySchedule.display());


//foo = function(){
//    this.myName = "Foo function.";
//}
//foo.prototype.sayHello = function(){
//    alert(this.myName);
//}
//foo.prototype.bar = function(){
//
////    THIS = this.constructor;
////    setTimeout(THIS.sayHello(),1000);
//    setTimeout(
//        (function(s){
//            return function(){
//                s.sayHello();
//            }
//        })(this), 5000);
//}
//
//var f = new foo;
//f.bar();

var obj = new Object();
var objRef = obj;

obj.oneProperty = true;

alert(obj.oneProperty == objRef.oneProperty);

var items = new Array("one","two","three");
var itemsRef = items;
items = new Array("new","array");
alert(items != itemsRef);

var item = "test";
var itemRef = item;
item += "ing";
alert(item != itemRef);

//函数重载
function sendMessage(msg,obj){
    //如果
}

//发送一条消息的简单函数
function sendMessage(msg , obj){
    //如果消息和对象（的参数）都被提供
    if(arguments.length == 2)
        //给对象发送消息
        obj.handleMsg(msg);

    //否则，假定只提供了一条消息\
    else
        //那么仅显示默认的错误信息
        alert(msg);

}

//仅用一个参数调用这个函数 - 用alert来显示此消息
sendMessage("Hello,World!");

//又或者我们可以将一个我们自己写好的对象传入
//负责用另一套办法显示信息
sendMessage("How are you?",{
    handleMsg : function(msg){
        alert("This is a custom message:" + msg);
    }
});
//一个接受任意数量参数并将其转换为数组的函数
function makeArrar(){
    //临时使用的数组
    var arr = [];

    //遍历传入的每个参数
    for(var i = 0;i<arguments.length;i++){
        arr.push(arguments[i]);
    }

    //返回结果数组
    return arr;
}




























