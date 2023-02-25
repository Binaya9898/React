const student=[
    {
        name:"Laxman",
        weight:78,
        address:"Pokhara"
    },

    {
        name:"Anish",
        weight:65,
        address:"Lekhnath"
    },

    {
        name:"Kusal",
        weight:73,
        address:"Gorkha"
    },
]



const s=student.reduce((total,std)=>{
    return total=total+std.weight
},0);
console.log('====================================');
console.log(s);
console.log('====================================');


// reduce is used to combine the array of items into single unit
// reduce fnx takes two params 
// 1. variable to hold the combine value
// 2. refrence variable to get the array items.
