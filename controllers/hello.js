var Hello = {

  greetUser: function (req, res) {
    let user = req.params.user;
    let out = {
      "message": `Hello, ${user}!`
    }
    res.json(out);
  },

  greetWorld: function (req, res) {
    let out = {
      "message": "Hello, world!"
    }
    res.json(out);
  }
}

module.exports = Hello;
