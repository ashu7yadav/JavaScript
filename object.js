const  mysymbole =  Symbol("key1")

const info = {
    name:"Ashutosh",
    city :"lucknow",
    course:"AIML" ,
    mail:"ashu@mail.com",
    Phone :7834784379,
    "name1":"aman",
    [mysymbole]: "key1"

}
// console.log(info);
// console.log(info["mail"]);
// console.log(info["Phone"]);
// console.log(info["name1"])
// console.log(info[mysymbole])

info.mail = "ashutosh@mail.com"
info.city ="gkp"


console.log(info);
