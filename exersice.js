const persons = [
  {
    firstName: "Narantsatsralt",
    lastName: "Bumnasan",
    phoneNumber: "99111111",
  },
  { firstName: "Namkhai", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Gundalai", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Lkhamjav", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Serik", lastName: "Bumnasan", phoneNumber: "99111111" },
];

for (i = 0; i < persons.length; i++) {
  console.log(persons[i].firstName);
  persons[i] = persons[i].firstName;
}
console.log(persons);
