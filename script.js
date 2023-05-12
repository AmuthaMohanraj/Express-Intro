let express=require('express');
let app=express()
let port=4000;

app.listen(port,()=>{
    console.log('server is runing....')
})


obj=[{
    id: 1,
    name:'poongodi',
    contact:9080818453,
    userId:234
  },

{
  id: 2,
  name:'chadru',
  contact:9514801929,
  userId:89097
},

{
  id: 3,
  name:'mohan',
  contact:9514801929,
  userId:89097
},

{
  id: 4,
  name:'komathi',
  contact:9514801929,
  userId:89097
}
]

//example

// app.get('/',(req,res) => res.send('Hi...'))


//getAllUsers Data

app.get('/users',(req,res)=>{
  res.json(obj)
  console.log('inside the function print alluser')
})



//getSingleUsersData

app.get('/:id',(req,res)=>{

    console.log('inside the get function');
   obj.filter(e=>{
    if(e.id==req.params.id) {
        res.send(e);
        console.log('get single user')
      }

   })
})






//querystring method is like key and values
// syntax for this string query using this ?key=value
// ?key=value&key='value'
// & is seprator


// example 1

// app.get('/',(req,res)=>{
//   console.log('i am inside query string example 1')
//   console.log(req.query['abc'])
//   res.send(req.query['abc'])
// })



// example 2

app.get('/',(req,res)=>{
    console.log('i am inside query string example 2')
    res.send('Hi... Welcome'+  req.query['name']+ 'your age is '+ req.query['age'])
    console.log('Hi... Welcome'+  req.query['name']+ 'your age is '+ req.query['age'])
})



//example 3

app.get('/',(req,res)=>{
  console.log('i am inside query string example 3 print json object', req.query)
  // console.log("Array", JSON.parse(JSON.stringify(req.query)));
  // let arr = JSON.parse(JSON.stringify(req.query));
  // console.log(JSON.parse(arr.name));
   res.json([
      {name:req.query['name'],age:req.query['age']},
      {name:req.query['name'],age:req.query['age']},
      {name:req.query['name'],age:req.query['age']},
  ])

  console.log(res.json([
    {name:req.query['name'],age:req.query['age']},
    {name:req.query['name'],age:req.query['age']},
    {name:req.query['name'],age:req.query['age']},
]))

})

