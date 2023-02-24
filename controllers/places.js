const router = require('express').Router()

router.get ('/', (req, res) => {
     res.send('GET /places')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'public/images/Thai-food.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'public/images/bread.jpg'
      }]
      
    res.send('places/index', {places})
})

module.exports = router
  