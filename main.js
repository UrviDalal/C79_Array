name_of_student_array=[];
function submit(){
    var name1=document.getElementById("student_name1").value;
    var name2=document.getElementById("student_name2").value;
    var name3=document.getElementById("student_name3").value;
    var name4=document.getElementById("student_name4").value;
    name_of_student_array.push(name1);
    name_of_student_array.push(name2);
    name_of_student_array.push(name3);
    name_of_student_array.push(name4);
    console.log(name_of_student_array);
    document.getElementById("diplay_names").innerHTML = name_of_student_array;
    document.getElementById("btnSubmit").style.display="none";
    document.getElementById("btnSort").style.display="inline-block";
}

function sorting(){
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("diplay_names").innerHTML = name_of_student_array;
}