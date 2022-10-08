import navbar from "../components/navbar.js";
import { fecthPhoto } from "../components/fecthPhoto.js";
document.getElementById('navcontainer').innerHTML= navbar();

const key = 'https://api.unsplash.com/photos/?client_id=tVaOs9sWyz_3pLOJq7pAg2awcZ0VoiTa3qw4oGfj8SA'


const initFun = async (key) =>{
    let data = await fecthPhoto(key);
    console.log(data);
    appendData(data);
}
initFun(key);

const appendData = (data) =>{
    document.querySelector("#mainPage").innerHTML = null;
        data.forEach(el => {
            
            let div = document.createElement('div');
            let img = document.createElement('img');
            img.src = el.urls.small;
            let name = document.createElement('h4');
            name.innerText = el.alt_description;
            

            div.append(img, name);
            document.querySelector("#mainPage").append(div);
        });

}
const initFun2 = async (key) =>{
    let data = await fecthPhoto(key);
    console.log(data);
    appendData(data.results);
}
document.querySelector("#searchInput").addEventListener("keypress", (e)=>{
    if(e.key==='Enter'){

        let searchTerm = document.querySelector("#searchInput").value;
        const pickey = `https://api.unsplash.com/search/photos?&query=${searchTerm}&client_id=tVaOs9sWyz_3pLOJq7pAg2awcZ0VoiTa3qw4oGfj8SA`
        
        initFun2(pickey);
     
    }
});

document.getElementById('nature').addEventListener('click', ()=>{
    initFun2(`https://api.unsplash.com/search/photos?&query=nature&client_id=tVaOs9sWyz_3pLOJq7pAg2awcZ0VoiTa3qw4oGfj8SA`)
} )
document.getElementById('city').addEventListener('click', ()=>{
    initFun2(`https://api.unsplash.com/search/photos?&query=city&client_id=tVaOs9sWyz_3pLOJq7pAg2awcZ0VoiTa3qw4oGfj8SA`)
} )
document.getElementById('sport').addEventListener('click', ()=>{
    initFun2(`https://api.unsplash.com/search/photos?&query=sport&client_id=tVaOs9sWyz_3pLOJq7pAg2awcZ0VoiTa3qw4oGfj8SA`)
} )

