let getDemoData = (resource)=>{
    return new Promise((resolve,reject)=>{
        let req = new XMLHttpRequest();
    
        req.addEventListener("readystatechange",()=>{
            if(req.readyState === 4 && req.status === 200){
                let datas = JSON.parse(req.responseText);
                resolve(datas);
            }else if(req.status===404){
                reject("Error Occurs!!!");
            }
        })
    
        req.open("GET",resource);
        req.send();
    })
}

getDemoData("DemoData/Demo1.json")
.then((data)=>{
    console.log(data);
    return getDemoData("DemoData/Demo2.json")
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})