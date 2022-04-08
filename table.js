
// When script is l;loaded function
// automatically gets called
yourFunction();
 
function yourFunction(){
    var users = [
        { name: "eia", email: "eia@gmail.com" , age: 22, dob: "04/04/2000", company: "abc"},
        { name: "Ria", email: "ria@gmail.com" , age: 22, dob: "04/09/2000", company: "abc"},
        { name: "aman", email: "aman@gmail.com" , age: 22, dob: "04/08/2000", company: "abc"},
        { name: "mina", email: "mi@gmail.com" , age: 22, dob: "04/06/2000", company: "abc"},
        { name: "sia", email: "sia@gmail.com" , age: 22, dob: "04/04/2000", company: "abc"} 
    ];

  for (i = 0; i < users.length; i++) {
    document.write("<tr>");

        document.write("<td class='td'>");
        document.write(users[i].name);
        document.write("</td>");

        document.write("<td class='td'>");
        document.write(users[i].email);
        document.write("</td>");
        
        document.write("<td class='td'>");
        document.write(users[i].age);
        document.write("</td>");
        
        document.write("<td class='td'>");
        document.write(users[i].dob);
        document.write("</td>");
        
        document.write("<td class='td'>");
        document.write(users[i].company);
        document.write("</td>");
    
    document.write("</tr>");
  }
}
 