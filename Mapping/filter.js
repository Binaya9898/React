const student=[
    {
        name:"Laxman",
        weight:78,
        address:"Pokhara",
        faculty:"Bca"
        
    },

    {
        name:"Anish",
        weight:65,
        address:"Lekhnath",
        faculty:"Bca"

    },

    {
        name:"Kusal",
        weight:73,
        address:"Gorkha",
        faculty:"Bba"
    },
]
//filter returns the array items if the condition gets correct.
const bcaStudent=student.filter(std=>{
    return std.faculty==="Bca";
    
})

//we can further point out the items from the filtered array by using map.

const bcaStudentName=bcaStudent.map(stdname=>stdname.name);

console.log(bcaStudentName);
