var BaseMongodb    = require('./base_mongodb')  , baseMongodb    = new BaseMongodb()  , studentInfo  = {}  , classInfo    = {}  , studentName  = 'student_info'  , className    = 'class';studentInfo.name = 'danhuang';studentInfo.age  = '22';studentInfo.class_id = '1';classInfo.class_id = '1';classInfo.name  = '三年级二班';baseMongodb.insert(studentName, studentInfo, function(ret){	console.log(ret);});baseMongodb.insert(className, classInfo, function(ret){	console.log(ret);});/*数据插入验证 *//*rowInfo.book_name = 'nodejs book1';baseMongodb.insert(tableName, rowInfo, function(ret){	console.log(ret);});rowInfoNextOne.book_name = 'nodejs book2';rowInfoNextOne.author = 'danhuang';baseMongodb.insert(tableName, rowInfoNextOne, function(ret){	console.log(ret);});rowInfoNextTwo.book_name = 'nodejs book3';rowInfoNextTwo.author = 'danhuang';baseMongodb.insert(tableName, rowInfoNextTwo, function(ret){	console.log(ret);});rowInfoNextThree.book_name = 'nodejs book34';rowInfoNextThree.author = 'danhuang';baseMongodb.insert(tableName, rowInfoNextThree, function(ret){	console.log(ret);});*//* findOneById验证 *//*var id ='50db1e69d923dbfe06000001';baseMongodb.findOneById(tableName, id, function(ret){	console.log(ret);});*//* modify验证 *//*var newInfo = {};newInfo.book_name = 'nodejs book-by danhuang';newInfo.author = 'Jimi';var id = '50db1e69d923dbfe06000001';baseMongodb.modify(tableName, id, newInfo, function(ret){	console.log(ret);});*//* remove验证 *//*var id = '50db1e69d923dbfe06000001';baseMongodb.remove(tableName, id, function(ret){	console.log(ret);});*//* find验证 *//*var whereJson = {'author':'danhuang'};var fieldsJson = {'book_name':1, 'author':1};var orderByJson = {'book_name':1};var limitJson = {'num':10};baseMongodb.find(tableName, whereJson, orderByJson, limitJson, fieldsJson, function(ret){	console.log(ret);});*/