const planguages=[
    {
        name:"C language",
        difficulty:"Easy",
        type:"Procedural",
        learnt:80
    },

    {
        name:"Python",
        difficulty:"Easy",
        type:"Procedural",
        learnt:80
    },

    {
        name:"Javascriopt",
        difficulty:"Easy",
        type:"Procedural",
        learnt:80
    },

]
// we can map th name of the objects in an array
const Nameshow=planguages.map(planguages=>planguages.name);

// we can map the items of an array together
const typeNlearnt=planguages.map(planguages=>{
    return{
     name:planguages.name,learnt:planguages.learnt
    }
})

console.log('====================================');
// console.log(Nameshow);
console.log(typeNlearnt);

console.log('====================================');