const db = require("./server/db/models/db");
const { green, red } = require("chalk");

const Student = require("./server/db/models/Student");
const Campus = require("./server/db/models/Campus");

const students = [
  {
    Name: "Homer",
    Campus: "Podunk college",
    CampusId: 1
  },
  {
    Name: "Lisa",
    Campus: "Springfield Elementary",
    CampusId: 2
  },
  {
    Name: "Bart",
    Campus: "Springfield Elementary",
    CampusId: 2
  }
];

const campuses = [
  {
    Name: "Podunk college",
    Address: "also in Springfield"
  },
  {
    Name: "Springfield Elementary",
    Address: "in Springfield obviously"
  }
];

const seed = () =>
  Promise.all(students.map(student => Student.create(student))).then(() =>
    Promise.all(campuses.map(campus => Campus.create(campus)))
  );

const main = () => {
  console.log("Syncing db...");
  db.sync({ force: true })
    .then(() => {
      console.log(green("Database seeded!!!!"));
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};
main();
