use("EmployeeDB");

// db.createCollection("employees");

// db.employees.insertMany([
//   {
//     emp_id: 101,
//     name: "Riya",
//     salary: 50000,
//     dept: "IT",
//     contact: "9876543210",
//     age: 19
//   },
//   {
//     emp_id: 102,
//     name: "Aman",
//     salary: 45000,
//     dept: "HR",
//     contact: "9876543211",
//     age: 22
//   },
//   {
//     emp_id: 103,
//     name: "Rahul",
//     salary: 60000,
//     dept: "Finance",
//     contact: "9876543212",
//     age: 25
//   },
//   {
//     emp_id: 104,
//     name: "Priya",
//     salary: 35000,
//     dept: "IT",
//     contact: "9876543213",
//     age: 23
//   }
// ]);

// db.employees.find();

// db.employees.find({ dept: "IT" });


db.employees.find({ salary: { $gt: 40000 } });


// db.employees.find({ age: { $lt: 25 } });

// db.employees.find({}, { _id: 0, name: 1, salary: 1 });


// db.employees.updateOne(
//   { emp_id: 101 },
//   { $set: { salary: 55000 } }
// );


// db.employees.updateOne(
//   { emp_id: 102 },
//   { $set: { dept: "Marketing" } }
// );


// db.employees.deleteOne({ emp_id: 104 });


db.employee.updateMany(
    { dept: "IT"},
    {
        $set:{
            salary: 65000
        }
    }
  )



  db.employees.find(
       {

          $or:[
            { dept:"HR" },
            {age} 
          ]
       }
  )