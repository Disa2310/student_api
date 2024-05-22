
var add_std = require('../model/add_std_model');

var login_status = 0;

exports.insert = async (req,res) => {
        var data = await add_std.create(req.body );

        res.status(200).json({
            status:"data insert",
            data
        })
}
exports.delete_data = async (req,res) => {
    var id=req.params.id;
    var data = await add_std.findByIdAndDelete(id );

    res.status(200).json({
        status:"data deleted",
       
    })
}
exports.update_data = async (req,res) => {

    var id=req.params.id;
    var data = await add_std.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"data update",
       
    })
}


exports.get_data = async (req,res) => {

    var data = await add_std.find(req.body);

    res.status(200).json({
        status:"data select",
        data
    })
}

// exports.login = async (req,res) => {

//     var data = await add_std.find({"email":req.body.email});

//     console.log(data);

    
    
// }
// exports.logout = async (req,res) => {
//     login_status=0;
//     res.status(200).json({
//         status:"user logout"
//     })
// }