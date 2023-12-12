const express=require('express');
const mysql = require("mysql");


const app=express();
app.use(express.json());


app.get('/', (req, res) => {
      res.send('hello  world');
});

var con = mysql.createConnection({
    host: "15.206.6.55",
    user: "hourlyrooms",
    password: "Hourlyr0Oms@1584",
    database: "jaymalha_hourooms" 
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Date Base is Connected!");
  });

app.get('/users', (req, res)=>{
    con.query('select *from users', (err, result)=>{
          if(err) throw err;
          res.json(result);
    }); 
});

// get users by the id

app.get('/users/:id', (req, res)=>{
    const { id } = req.params;
     con.query('select *from users where id=?', [id], (err, result)=>{
          if(err) throw err;
          res.json(result[0]);
     });
});


// for creating new users

// app.post('/users', (req, res)=>{
//     const { name, email } = req.body;
//     con.query('insert into users (first_name, last_name) values(?,?)', [first_name, last_name], (err, result)=>{
//           if(err) throw err;
//           res.json({message: 'User added successfully', id: result.insertId});
//     });
// });

//    // for updating a users by the id

//    app.put('/users/:id', (req,res)=>{
//        const { id } = req.params;

//        con.query('update users set first_name=?, last_name=? where id=?' , [first_name, last_name,id], (err)=>{
//               if(err) throw err;
//               res.json({message: 'updated successfully'});
//        } );
//    });


//    // deleting the users

//    app.delete('/users/:id', (req, res)=>{
//     const { id } = req.params;
//       con.query('delete from users where id=?', [id], (err)=>{
//           if(err) throw err;
//            res.json({message: 'deleted successfully'});
//       });
//    });



app.listen(8000, () => {
    console.log('localhost is connected');
})