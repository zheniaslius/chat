const router = require("express").Router();
const UserService = require('../../services/userService');

router.get("/", (req, res) => {
  UserService.findAll()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(err => {
      console.log(err);
      res.statusCode(500).json({
        message: 'Users not found',
        err: err
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  UserService.findById(id)
  .then(person => {
    res.status(200).send(person);
  })
  .catch(err => {
    console.log(err);
    res.statusCode(500).json({
      err: err
    });
  });
})

router.post("/", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "User content can not be empty"
    });
  }

  UserService.createUser(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => {
      console.log(err);
      res.statusCode(500).json({
        message: 'User not created',
        err: err
      });
    });
});

router.get("/:id/speakers", (req, res) => {
  const id = req.params.id;
  UserService.findSpeakers(id)
    .then(people => {
      res.status(200).send(people);
    })
    .catch(err => {
      console.log(err);
      res.statusCode(500).json({
        err: err
      });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  UserService.update(id)
    .then(people => {
      res.status(200).send(people);
    })
    .catch(err => {
      console.log(err);
      res.statusCode(500).json({
        err: err
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  UserService.delete(id)
    .then(people => {
      res.status(200).send(people);
    })
    .catch(err => {
      console.log(err);
      res.statusCode(500).json({
        err: err
      });
    });
});

module.exports = router;