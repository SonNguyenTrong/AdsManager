const router = require('express').Router();

const {
  getDashboard,
  toggleCamp
} = require('../controller/dashboard');

// Todo: use middleware authen
// router.use();

router.get('/', (req,res) =>{
  res.render('index', {
    title: 'Dashboard',
    data: getDashboard()
  })
})

router.post('/:id', (req,res) =>{
  //TODO: toggle camp id
})

module.exports = router;