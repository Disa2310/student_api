var count_result=require('../model/add_result_model');

exports.data_count = async (req,res) => {

    
    var data = await count_result.find({"result":"Pass"}).count();
    var fail_data = await count_result.find({"result":"Fail"}).count();
    var atkt = await count_result.find({"result":"ATKT"}).count();

    res.status(200).json({
        status:"counting pass",
        data,
        fail_data,
        atkt
    })
}