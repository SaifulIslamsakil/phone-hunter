const dataLoad = async (inpute) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inpute}`);
    const objectDatas = await res.json();
    const arrayDatas = objectDatas.data;
    singelData(arrayDatas)
}

const singelData = (datas) =>{
    const cardContainer  = document.getElementById('card-container')
   
    // console.log(cardContainer)

    datas.forEach(data => {
        // console.log(data)

        const createDiv = document.createElement('div');
        createDiv.classList =` card bg-gray-100 p-4 shadow-xl ` 
        createDiv.innerHTML =`<figure><img src="${data.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Brand : ${data.brand}</h2>
          <p>phone_name : ${data.phone_name}</p>
          <div class="card-actions mt-2 justify-center">
            <button class="btn btn-primary">show all detalies</button>
          </div>`;
          cardContainer.appendChild(createDiv);
    });
    lodder(false)
}

const serchBtn = () =>{
    const inputes = document.getElementById('serch-input')
    const inpute = inputes.value;
    dataLoad(inpute)
    inputes.value ='';
    lodder(true)
}
const lodder = (isLoadding) =>{
    const loddin = document.getElementById('loder');
    if(isLoadding){
    loddin.classList.remove('hidden')
}
else{
    loddin.classList.add('hidden')
}
}
