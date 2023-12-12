module.exports= app => {
    const bankdetails=require(.../controllers/controller.js);


    var router=require('express').router();
    router.post("", bankdetails.create);

    router.get("/:id", bankdetails.findOne);
    router.put("/:id", bankdetails.update);
    router.delete("/:id", bankdetails.delete);
    //app.use('/api/tutorials', router);


};