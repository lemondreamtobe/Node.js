var BaseModel    = require('./base_model')  , baseModel    = new BaseModel()  , studentInfo  = {}  , classInfo    = {}  , studentName  = 'student_info'  , className    = 'class';studentInfo.name = 'danhuang';studentInfo.age  = '22';studentInfo.class_id = '1';classInfo.class_id = '1';classInfo.name  = '三年级二班';/*数据插入验证 */baseModel.insert(studentName, studentInfo, function(ret){	console.log(ret);});baseModel.insert(className, classInfo, function(ret){	console.log(ret);});/* findOneById验证 *//*var idJson = {'book_id': 1};baseModel.findOneById(tableName, idJson, function(ret){	console.log(ret);});*//* modify验证 *//*var newInfo = {};newInfo.book_name = 'nodejs book-by danhuang';newInfo.author = 'Jimi';var idJson = {'book_id': 2};baseModel.modify(tableName, idJson, newInfo, function(ret){	console.log(ret);});*//* remove验证 *//*var idJson = {'book_id': 2};baseModel.remove(tableName, idJson, function(ret){	console.log(ret);});*//* find验证 *//*var whereJson = {	'and' : [{'key':'book_name', 'opts':'=', 'value' : '"nodejs"'}, {'key':'author', 'opts':'=', 'value' : '"danhuang"'}],	'or' : [{'key':'book_id', 'opts':'<', 'value' : 10}]};var fieldsArr = ['book_name', 'author', 'time'];var orderByJson = {'key':'time', 'type':'desc'};var limitArr = [0, 10];baseModel.find(tableName, whereJson, orderByJson, limitArr, fieldsArr, function(ret){	console.log(ret);});*/