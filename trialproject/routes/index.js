const express = require('express');
const router = express.Router();
const cors=require('cors');
const app=express();

app.use(cors());

const middleware1 =(req,res,next)=>{
  res.send("Middleware-1")
  console.log("I Got The First Request")
  next();
}
const middleware2 =(req,res,next)=>{
  res.send("Middleware-2")
  console.log("I Got The Second Request")
  next();
}

/* GET Base page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cors',(req,res)=>{
  res.json({
    "student":[{
      "name":"Taslim Menon"
    }]
  })
})
/* GET home page. */
router.get('/home', middleware1,function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("First Middleware Request Recived")
});
/* GET menu page. */
router.get('/menu',middleware2,(req,res)=>{
  console.log("Second Middleware Request Recived")
  res.json({
    "student":[{
      "name":"Taslim Menon"
    }]
  })
  res.end();
})

module.exports = router;
