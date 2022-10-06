//Write code here

let student = {
    productId: "productId",
    productName: "productName",
    description: "description",
    unitPrice: "unitPrice" 
}
function displayStudentDeatails(studentValues) {

    console.log("------Student Details-------");
    console.log("productId: ", studentValues.productId);
    console.log("productName : ", studentValues.productName);
    console.log("description: ", studentValues.description);
    console.log("unitPrice = ", studentValues.unitPrice)
}

displayStudentDeatails(student);