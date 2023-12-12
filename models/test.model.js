const sql=require('./db.js');

const testapi=function(testapi){
    this.name=testapi.name;
    // this.description=testapi.description;
    // this.publish=testapi.publish;
};

testapi.create=(cnew, result) => {
   sql.query("insert into api" , cnew, (err, res)=>{
       if(err){
          console.log("error", err);
          result(err, null);
          return;
       }

       console.log("create testapi", {id: res.insertId,  ...cnew});
       result(null, {id: res.insertId, ...cnew});
   });
};

testapi.FindById=(id, result) => {
    sql.query('select *from bank_details where id=${id}', (err, res)=>{
        if(err){
            console.log("error", err);
            result(err, null);
            return;
         }

         if(res.length){

              
            console.log("fount testapi", res[0]);
            result(null, res[0]);
            return;
         }

         result({kind: "not found"}, null);
        

    });
};

testapi.getall=(title, result) =>{
    let query="select *from bank_details";
    // if(title){
    //     query +='WHERE title LIKE '%${title}%'';
    // }

    sql.query(query, (err, res)=>{
         if(err){
            console.log("error", err);
            result(null, err);
            return;
         }

         console.log("testapi", res);
         result(null, res);
    });
};

testapi.updateById=(id, someu, result) =>{
    sql.query(
        "update bank_details set bank_name='??' where id=?",
          [someu.bank_name, someu.id],
          (err, res) => {
            if(err){
            console.log("error", err);
            result(null, err);
              return;
            }

            if(res.affectedRows==0){
                result({ kind: "not_found" }, null);
                return;
        
            }

            console.log("updated tutorial", {id: id, ...someu});
            result(null, {id: id, ...someu});
        
    });

};

testapi.Remove=(id, result) => {
      sql.query("delete from bank_details where id=?",id, (err, res)=>{
           if(err){
            console.log("error", err);
            result(null, err);
              return;
           }
           if(res.affectedRows==0){
            result({ kind: "not_found" }, null);
            return;
    
        }

        console.log("removed bank details with id", id);
        result(null, res);
      });
};

module.exports = testapi;






