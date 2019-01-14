var options = ["arts",  "business","education", "elections/campaigns", "environment", "health", "infrastructure", "labor", "legislature","public safety", "science", "sports","weather"];


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});



