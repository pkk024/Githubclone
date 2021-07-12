

    var form =document.getElementById("myForm")
   form.addEventListener('submit',function(e)
    {
        e.preventDefault()
        var search=document.getElementById("search").value
        var orginalName=search.split(" ").join("")
       
        fetch("https://api.github.com/users/"+orginalName)
        .then((result)=>result.json())
        .then((data)=>{
            document.getElementById("result").innerHTML= 
            <img src="${data.avatar_url}"/>
        })
        user = 'tik9'
        apirepo = `https://api.github.com/users/${user}`
        
        
        listrepos = document.createElement('ul')
             document.getElementById('github').appendChild(listrepos)
             $.getJSON(apirepo + '/repos', function (data) {
                 console.log('data now', data)
     
                 function compare(a, b) {
                     if (a.watchers > b.watchers) {
                         return -1
                     }
                     if (a.watchers < b.watchers) {
                         return 1
                     }
                     return 0
                 }
     
                 data.sort(compare)
                 data.forEach(v => {
     
                     listItemRepo = document.createElement('li')
                     listrepos.appendChild(listItemRepo)
                     hlink = document.createElement('a')
                     listItemRepo.appendChild(hlink)
                     hlink.textContent = `${v.description} | Stars: ${v.watchers}`
                     hlink.href = v.html_url
                 })
             })
    })
