var express = require('express');
var router = express.Router();



const messages = [
  {
    text: 'Hello There Amy!',
    user: 'Jonas',
    added: new Date()
  },
  {
    text: 'Did you buy the wheat flour?',
    user: 'Mom',
    added: new Date()
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board' ,messages: messages});
});
//New message comp page
router.get('/new',function(req,res,next){
  res.render('form')

})
router.post('/new', (req,res,next)=>{
  let text,user,date 
  text=req.body.text
  user=req.body.user
  date = new Date()
  messages.push({text: text,user: user, added: date })
  res.redirect('/')
})

module.exports = router;
