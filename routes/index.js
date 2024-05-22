var express = require('express');


var router = express.Router();
var stu_login = require('../controller/admin_controller');
var staff_reg = require('../controller/staff_controller');
var staff_login = require('../controller/staff_login_controller');
var add_std = require('../controller/add_std_controller');
var add_division = require('../controller/add_div_controller');
var add_stude = require('../controller/add_stude_controller');
var add_result = require('../controller/add_result_controller')
var view_result = require('../controller/View_result_controller');
var view_staff = require('../controller/view_staff_controller');
var view_stude = require('../controller/view_student_div_std_controller');
var manage_result = require('../controller/manage_result_controller');
var count_result = require('../controller/result_count_controller');
var auth = require('../middleware/auth');

/* GET home page. */
// admin page


router.post('/insert',stu_login.insert);
router.get('/admin',stu_login.get_data);
router.post('/login',stu_login.login);
router.get('/logout',stu_login.logout);

// staff_reg page

router.post('/staffinsert',staff_reg.insert);
router.get('/staff',staff_reg.get_data);
router.get('/staffdelete/:id',staff_reg.delete_data);
router.post('/staffupdate/:id',staff_reg.update_data);


// staff_login page


router.post('/staff_logininsert',staff_login.insert);
router.get('/staff_login',staff_login.get_data);
router.get('/staff_logindelete/:id',staff_login.delete_data);
router.post('/staff_loginupdate/:id',staff_login.update_data);
router.post('/staff_login',staff_login.login);
router.get('/staff_logout',staff_login.logout);

// add_standard

router.post('/add_stdinsert',add_std.insert);
router.get('/add_std',add_std.get_data);
router.get('/add_stddelete/:id',add_std.delete_data);
router.post('/add_stdupdate/:id',add_std.update_data);


// add div 

router.post('/add_divisioninsert',add_division.insert);
router.get('/add_division',add_division.get_data);

// add student

router.post('/add_studeinsert',add_stude.insert);
router.get('/add_stude',add_stude.get_data);
router.get('/add_studedelete/:id',add_stude.delete_data);
router.post('/add_studeupdate/:id',add_stude.update_data);

// add result

router.post('/add_resultinsert',add_result.insert);
router.get('/',add_result.get_data);

//view result student wise

router.post('/view_resultinsert',view_result.insert);
router.get('/view_result',view_result.get_data);
router.get('/view_result/:id',view_result.view_data);


//view staff

router.post('/view_staffinsert',view_staff.insert);
router.get('/view_staff',view_staff.get_data);

//view student std div wise
router.post('/view_studeinsert',view_stude.insert);
router.get('/view_stude',view_stude.get_data);

//manage_result

router.get('/manage_resultdelete/:id',manage_result.delete_data);
router.post('/manage_resultupdate/:id',manage_result.update_data);

// result count
router.get('/count',count_result.data_count);

module.exports = router;
