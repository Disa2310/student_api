var add_stude = require('../model/add_stude_model');


exports.insert = async (req,res) => {
        var data = await add_stude.create(req.body );

        res.status(200).json({
            status:"data insert",
            data
        })
}
exports.delete_data = async (req,res) => {
    var id=req.params.id;
    var data = await add_stude.findByIdAndDelete(id);

    res.status(200).json({
        status:"data deleted",
    })
}
exports.update_data = async (req,res) => {

    var id=req.params.id;
    var data = await add_stude.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"data update",
       
    })
}
exports.get_data = async (req,res) => {

    var data = await add_stude.find();

    res.status(200).json({
        status:"data select",
        data
    })
}



