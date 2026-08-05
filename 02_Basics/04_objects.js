// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regulaeruser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Manish",
            lastname: "Yadav"
        }
    }
}

console.log(regulaeruser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

const users = [
    {

    },
    {

    },
    {

    },
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));


const course = {
    courseName: "JS",
    coursePrice: 999,
    courseInstructor: "Manish",
}

// course.courseInstructor
const {courseInstructor : Instructor} = course
console.log(Instructor);
    

// JSON API
// {
//     "name": "Manish",
//     "course": "JS",
//     "price": "free",
// }

// [
//     {},
//     {},
//     {},
// ]