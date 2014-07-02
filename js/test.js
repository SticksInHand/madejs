/**
 * Created by M.Jin on 14-7-2.
 */
// 'Lecture' 类的构造函数
// 用名称（name）和教师（teacher）作为参数
function Lecture(name,teacher){
    //将参数保存为对象的局部属性 (local property)
    this.name = name;
    this.teacher = teacher;
}
//Lecture 类的一个方法（method），用于生成一条显示Lecture信息的字符串
Lecture.prototype.display = function(){
    return this.teacher + "is teaching" + this.name;
};

//Schedule 类的构造函数，以课程的数组作为参数
function Schedule(lectures){
    this.lectures = lectures;
}

//构造一条字符串，表示课程的安排表
Schedule.prototype.display = function(){
    var str = '';

    //遍历每项课程，建立包含它们信息的字符串
    for(var i = 0;i < this.lectures.length; i++)
        str += this.lectures[i].display + "";

    return str;
};