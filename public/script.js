
const outerDiv =  document.getElementById('petsList');
console.log('PetList', petsList);

document.addEventListener('DOMContentLoaded', function() {
  let responseClone;
  const API_URL = `http://localhost:8080/api/v1`;

  fetch(`${API_URL}/pets`)
    .then(response => {
      responseClone = response.clone();
      console.log('responseClone',responseClone)
      return response.json();
    }) 
    .then(pets => {
      console.log('data from backend:', pets);
      renderPets(pets);
    })
    .catch(error => {
      console.error('Error fetching data from backend', error);
    })
});

function renderPets(pets) {
  console.log('Pets:', pets);
  
  const petsArray = pets.map(pet => {
   const petsDiv = document.createElement('div');
   const name =  document.createElement('p');
   const breed = document.createElement('p');
   const age = document.createElement('p');
   const owner = document.createElement('p');
   const appointemnts = document.createElement('p');
   const appointmentsUl = document.createElement('ul');
   const dateli = document.createElement('li');
   const timeli = document.createElement('li');
   const reasonli = document.createElement('li');

   name.innerText = `Name : ${pet.name}`;
   breed.innerText = `Breed : ${pet.breed}`;
   age.innerText = `Age : ${pet.age}`;
   owner.innerText = `Owner : ${pet.owner}`;
   appointemnts.innerText = 'Appointments:'
   

   dateli.innerHTML = `Date : ${pet.appointments[0].date}`;
   timeli.innerHTML = `Time : ${pet.appointments[0].time}`;
   reasonli.innerHTML = `Reason : ${pet.appointments[0].reason}`;

   appointmentsUl.appendChild(dateli);
   appointmentsUl.appendChild(timeli);
   appointmentsUl.appendChild(reasonli);



   petsDiv.appendChild(name);
   petsDiv.appendChild(breed);
   petsDiv.appendChild(age);
   petsDiv.appendChild(owner);
   petsDiv.appendChild(appointemnts);
   petsDiv.appendChild(appointmentsUl);
   outerDiv.appendChild(petsDiv);
   

   return outerDiv;
  });

  return petsArray;
  
}