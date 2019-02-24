const path = require('path');

module.exports = {
  hello: (req, res) => {
    res.json({
      status: 'success',
      data: 'hello from server',
    });
  },
  auth: (req, res) => {
    setTimeout(() => {
      res.json({
        status: 'success',
        data: {
          isAuth: true,
        },
      });
    }, 1000);
  },
  todos: (req, res) => {
    res.json({
      status: 'success',
      data: [
        { key: 1, value: 'wash' },
        { key: 2, value: 'walk' },
        { key: 3, value: 'smear' },
        { key: 4, value: 'drink' },
      ],
    });
  },
  static: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
  },
};
