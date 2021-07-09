function addCard() {
    var d1 = document.getElementById('shopcard');
    var a1 = [ 'name: NVA,age: 16,course: mindX 01, mindX 02, mindX 03','name: NVB,age: 18,course: mindX 01,mindX 02, mindX 04','name: NVB,age: 18,course: mindX 01, mindX 02, mindX 04'];
    var i;
    var text;
    var myJSON = JSON.stringify(a1);
    console.log(myJSON[i])
    // let newCard = [
    //     {
    //         name: "NVA",
    //         age: 16,
    //         course: ["mindX 01", "mindX 02", "mindX 03"]
    //     },
    //     {
    //         name: "NVB",
    //         age: 18,
    //         course: ["mindX 01", "mindX 02", "mindX 04"]
    //     },
    //     {
    //         name: "NVC",
    //         age: 17,
    //         course: ["mindX 01", "mindX 03", "mindX 04"]
    //     },
    //     {
    //         name: "NVD",
    //         age: 15,
    //         course: ["mindX 01", "mindX 02", "mindX 03"]
    //     }
    //     ]
    for(i=0; i<=a1.length;i++){
        //text += a1[i] + "<br>";
        document.getElementById("demo").innerHTML = myJSON;
    }
    //document.getElementById("demo").innerHTML = text;
    
    // d1.insertAdjacentHTML('beforeend', newCard);
}
console.log('myJSON')
