const express = require('express');

const {Router} = express;
const router = new Router();

const float = (number) => parseFloat(number);

const add = ({a, b}) => ({result: float(a) + float(b)});

const subtract = ({a, b}) => ({result: float(a) - float(b)});

const multiply = ({a, b}) => ({result: float(a) * float(b)});

const divide = ({a, b}) => {
  if (float(b) === 0) return {result: 0};
  return {result: float(a) / float(b)};
};

const params = (query) => ({a: query.a, b: query.b});

router.get('/api/add', (req, res) => res.status(200).json(add(params(req.query))));
router.get('/api/subtract', (req, res) => res.status(200).json(subtract(params(req.query))));
router.get('/api/multiply', (req, res) => res.status(200).json(multiply(params(req.query))));
router.get('/api/divide', (req, res) => res.status(200).json(divide(params(req.query))));

router.post('/api/add', (req, res) => {
  console.log(req.body);
  res.status(200).json(add(params(req.body)))
});
router.post('/api/subtract', (req, res) => res.status(200).json(subtract(params(req.body))));
router.post('/api/multiply', (req, res) => res.status(200).json(multiply(params(req.body))));
router.post('/api/divide', (req, res) => res.status(200).json(divide(params(req.body))));

module.exports = router;