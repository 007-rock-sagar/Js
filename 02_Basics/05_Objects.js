//object destructuring
const Course={
    coursename:"Js",
price:"9999",
courseInstructor:"Hitesh"
}
//course.courseInstructor
//if we do need to find courseInstructor more than once we dont need to write this everytime so we use
const {courseInstructor}=Course
console.log(courseInstructor)
//also we can use aliases
const {courseInstructor:inst}=Course
console.log(inst)

//++++++++++++++++API_+++++++++++++++++++
