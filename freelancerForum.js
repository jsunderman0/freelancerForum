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

  function randomName(){
    const nameIdx = Math.floor(Math.random() * names.length)
    const name = {
        name: names[nameIdx]
    }
    return name
  };

  randomName();

  function randomOccupation(){
    const occupationIdx = Math.floor(Math.random() * occupations.length)
    const occupation = {
        occupation: occupations[occupationIdx]
    }
    return occupation
  };

  function randomPrice(){
    return (Math.ceil(Math.random()*100))
    
  };

 function renderName(){
    const nameList = names.map((name)=> {
        return `<li class = "name"> ${name} </li>`
    });
    div.innerHTML = nameList.join('')
 };

 renderName()

 function renderOccupation(){
    const occupationList = occupations.map((occupation) => {
        return `<li class = "occupation"> ${occupation} </li>`
    });
    div.innerHTML = occupationList.join('')
 };

 renderOccupation();
  

