var options = ["arts",  "business","education", "elections/campaigns", "environment", "health", "infrastructure", "labor", "legislature","public safety", "science", "sports","weather"];



               
               
              
               
               
function addOptions() {

    for (var i = 0; i < options.length; i++) {


        $("#category").text(` 
     
        <option value="${i+1} ">${options[i]}</option>
        `)

    }



};
console.log("")
addOptions();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});



