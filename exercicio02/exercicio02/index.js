let user = {name:"john",age:30}
    
alert(user.name);
alert(user.age);
delete user.age;

let key ="likes birds";
user [key]=true;
alert(user[key])

function makeUser (name,age){
    return{

name:name,
age:age,
};
}
let user =makeUser("jonh,30");
alert(user.name);
alert (user.age);

let obj ={
    0:"teste"
};
alert (obj["0"])//teste
alert(obj[0])//test9( same property)


