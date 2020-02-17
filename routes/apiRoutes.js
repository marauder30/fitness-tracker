const router = require("express").Router();
const db = require("../models");

// db.User.create({ name: "Nick Koch "})
// .then(dbUser => {
//     console.log(dbUser);
// })
// .catch(({ message }) => {
//     console.log(message);
// });

router.get("/api/workouts", (req,res) => {
  db.Workout.find({})
  .then(data => {
      res.json(data);
  })
  .catch(err => {
      res.json(err);
  });
});

router.post("/api/workouts", (req,res) => {
    db.Workout.create(req.body)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});


// app.get("/user", (req,r, es) => {
//   db.User.find({})
//   .then(dbUser => {
//       res.json(dbUser);
//   })
//   .catch(err => {
//       res.json(err);
//   });
// });

// app.post("/submit", ({ body },res) => {
//   db.Workout.create(body)
//   .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
//   .then(dbUser => {
//       res.json(dbUser);
//   })
//   .catch(err => {
//       res.json(err);
//   });
// });

// app.get("/populateduser", (req, res) => {
//   db.User.find({})
//   .populate("workouts")
//   .then(users => {
//       res.json(users);
//   })
//   .catch(err => {
//       res.json(err);
//   });
// });
