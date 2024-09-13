const course = {
    coursename: "Javascript",
    price:"999",
    courseInstructor: "HiteshChaudhary"
}
// console.log (course.courseInstructor)
const {courseInstructor} = course
console.log (courseInstructor)

const {courseInstructor:Instructor}=course
console.log (Instructor)
[
    {},
    {},
    {}
]