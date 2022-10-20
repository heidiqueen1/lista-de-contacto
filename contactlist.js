function addContact() {
    const contact = {
      id: parseInt(prompt("Ingrese un número de id con tres dígitos")),
      name: prompt("Ingrese el nombre del contacto"),
      surname: prompt("Ingrese el apellido del contacto"),
      cellphone: parseInt(prompt("Ingrese un número de teléfono")),
      location: [prompt("Ingrese Ciudad"), prompt("Ingrese país")],
    };
  
     contactList.push(contact);
   
  }


 
  function eraseContact() {
  const position = parseInt(
    prompt(" Introducir el número de la posición del contacto que desea borrar")
  );
  contactList.splice(position, 1);
};



const contactList = [
  {
    id: 001,
    name: "Heidi",
    surname: "Sanchez",
    cellphone: 5412962,
    location: [
      {
        city: "Conocoto",
        adress: " Barrio Pichincha",
      },
    ],
  },
  {
    id: 002,
    name: "Pedro",
    surname: "Sanchez",
    cellphone: 5410000,
    location: [
      {
        city: "Cartagena",
        adress: " Barrio La Costanera",
      },
    ],
  },
  {
    id: 003,
    name: "Juan",
    surname: "Volpe",
    cellphone: 5412200,
    location: [
      {
        city: "Buenos Aires",
        adress: "Barrio La Perla",
      },
    ],
  },
];





addContact();
eraseContact();
console.log(contactList);

