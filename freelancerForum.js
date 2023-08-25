const div = document.querySelector("div");
console.log(div);

const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
  const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];
  
  const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
//   function randomFreelancer(){
//     const nameIdx = Math.floor(Math.random() * names.length);
//     const occupationIdx = Math.floor(Math.random() * occupations.length);
//     const priceIdx = (Math.ceil(Math.random()*100))
//     const freelancer = {
//         name: names[nameIdx],
//         occupation: occupation[occupationIdx],
//         price: priceIdx
//     }
//     return freelancer
//   }

//   const newfreelancers = [
//     randomFreelancer()
//   ]

//   function render(){
//     const freelancerList = newfreelancers.map((freelancer) => {
//         return `<li class = 
//     })
//   }

    function randomName(){
    const nameIdx = Math.floor(Math.random() * names.length);
    const name = {
        name: names[nameIdx]
    }
    return name
  };

  const nameList = [
    randomName(),
    randomName()
  ];

//   function randomOccupation(){
//     const occupationIdx = Math.floor(Math.random() * occupations.length);
//     const occupation = {
//         occupation: occupations[occupationIdx]
//     }
//     return occupation
//   };

//   const occupationList = [
//     randomOccupation(),
//     randomOccupation()
//   ];

//   function randomPrice(){
//     const priceIdx = Math.ceil(Math.random() * 100);
//     return priceIdx
    
//   };

//   const priceList = [
//     randomPrice(),
//     randomPrice()
//   ];

 function renderName(){
    const html = nameList.map((name)=> {
        return `<li class = "name"> ${name} </li>`
    });
    div.innerHTML = nameList.join('')
 };

 renderName()

//  function renderOccupation(){
//     const occupationList = occupations.map((occupation) => {
//         return `<li class = "occupation"> ${occupation} </li>`
//     });
//     div.innerHTML = occupationList.join('')
//  };

//  renderOccupation();

//  function renderPrice(){
//     const priceList = occupations.map((price) => {
//         return `<li class = "price"> ${price} </li>`
//     });
//     div.innerHTML = occupationList.join('')
//  };

 
  

