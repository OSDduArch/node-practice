const express = require('express') //익스프레스 가져옴
const app = express() //새로운 익스프레스 앱을 만듬
const port = 3000 //포트

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:12341234@practice.qaq8q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.get('/', (req, res) => { //루트 디렉토리
  res.send('Hello World! 안녕하세요오') 
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})