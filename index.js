const express = require('express') //익스프레스 가져옴
const app = express() //새로운 익스프레스 앱을 만듬
const port = 3000 //포트
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/User");


app.use(bodyParser.urlencoded({extend: true}));

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.get('/', (req, res) =>  //루트 디렉토리
  res.send('Hello World! 안녕하세요오 togoqhr') 
) 

app.post('/register', (req, res) => {
  //회원가입시 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})