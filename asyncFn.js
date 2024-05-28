let getJson = async(resource)=>{
    let response = await fetch(resource)    //<=fetch link and get promise
    if(response.status===404){throw new Error("URL Not Found")}
    return await response.json();           //<=return json data promise
}

// get data from promise.
getJson("DemoData/Demo2.json")
.then((datas)=>{
    console.log(datas)
})
.catch((err)=>{
    console.log(err.message);
})