let input = [
    {nombre: "Pedro",edad: 20, ciudad: "Córdoba"},
    {nombre: "Patricia",edad: 22, ciudad: "Córdoba"},
    {nombre: "José",edad: 23, ciudad: "Mendoza"},
    {nombre: "Maria",edad: 20, ciudad: "Córdoba"},
    {nombre: "Juan",edad: 20, ciudad: "Córdoba"},
    {nombre: "Ana",edad: 22, ciudad: "Córdoba"},
];

let inputFilter = input.sort((a, b)=>(a.nombre < b.nombre) ? -1 : (a.nombre > b.nombre) ? 1 : 0)
                    .sort((a,b)=>a.edad-b.edad)
                    .filter(person=>person.ciudad== "Córdoba")
                    .map(person=>person.nombre);



// // sort by value
// items.sort(function (a, b) {
//     return a.value - b.value;
//   });

// // sort by name
// items.sort(function(a, b) {
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  

// objArray.sort(function(a, b) {
//     var textA = a.DepartmentName.toUpperCase();
//     var textB = b.DepartmentName.toUpperCase();
//     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
// });

console.log(inputFilter);

