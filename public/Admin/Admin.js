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
        var cell6 = row.insertCell(-1);
        var cell7 = row.insertCell(-1);
        var cell8 = row.insertCell(-1);
        cell1.innerHTML = user.student_id;
        cell2.innerHTML = user.nickname;
        cell3.innerHTML = user.branch;
        cell4.innerHTML = "<div class="+'boxobj'+">"+"<div>"+user.obj0name+"</div>"+"<div>"+"x "+user.obj0value+"</div>"+"</div>"
        cell5.innerHTML = user.phone;
        cell6.innerHTML = user.comment;
        cell7.innerHTML = user.name_smo;
        cell8.innerHTML = user.end_date;
        
    });
}

function deleteuser() {
    // DatabaseReference drUser = FirebaseDatabase.getInstance().getReference("User").child(sutdentid);
    // drUser.removeValue();
  }