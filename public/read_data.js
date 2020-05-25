// function submitOnclick() {
//     var user_id = document.getElementById('useridInput').value;
//     var ref = firebase.database().ref("User");

//     ref.orderByChild('user').equalTo(user_id).on("value", function(snapshot) {
//         snapshot.forEach(function(data) {
//             var id = data.key;
//             ref.once("value").then(function(snapshot){
//                 var student_id = snapshot.child(id).child("student_id").val();
//                 var nickname = snapshot.child(id).child("nickname").val();
//                 var branch = snapshot.child(id).child("branch").val();

//                 document.getElementById("student_id").innerHTML = "First name : "+student_id;
//                 document.getElementById("nickname").innerHTML = "Last name : "+nickname;
//                 document.getElementById("phone").innerHTML = "Phone : "+phone;
//             });
//         });
//     });
// }

window.onload = function() {
    var table = document.getElementById("myTable");
    var ref = firebase.database().ref('User');
    ref.orderByChild('user').on('child_added', function(snapshot) {
        var user = snapshot.val();

        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);
        var cell5 = row.insertCell(-1);
        cell1.innerHTML = user.student_id;
        cell2.innerHTML = user.nickname;
        cell3.innerHTML = user.branch;
        cell4.innerHTML = "<div class="+'boxobj'+">"+"<div>"+user.obj0name+"</div>"+"<div>"+"x "+user.obj0value+"</div>"+"</div>"
        cell5.innerHTML = user.end_date;
    });
}