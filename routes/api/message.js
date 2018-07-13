const router = require("express").Router();
const MessageService = require('../../services/messageService');

router.get("/", (req, res) => {
  MessageService.findAll()
    .then(messages => {
      res.status(200).send(messages);
    })
    .catch(err => {
      console.log(err);
      res.statusCode(500).json({
        message: 'Messages not found',
        err: err
      });
    });
});

router.post("/send", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Message can not be empty"
    });
  }

  MessageService.create(req.body)
    .then(message => res.status(201).send(message))
    .catch(err => {
      console.log(err);
      res.statusCode(500).json({
        message: 'Message not created',
        err: err
      });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  MessageService.update(id)
    .then(message => {
      res.status(200).send(message);
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
  MessageService.delete(id)
    .then(message => {
      res.status(200).send(message);
    })
    .catch(err => {
      console.log(err);
      res.statusCode(500).json({
        err: err
      });
    });
});

module.exports = router;