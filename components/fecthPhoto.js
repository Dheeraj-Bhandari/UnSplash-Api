async function fecthPhoto(url){
    let res = await fetch(url);
    let data = await res.json();
   
    return data;
}



export {fecthPhoto};