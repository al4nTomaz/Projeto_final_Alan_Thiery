const getPost2 = async () => {
  try {
    const apiData = document.getElementById("apiData");

    const res = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await res.json();

    if (!res.ok) {
      return data.error;
    }

    apiData.textContent = JSON.stringify(data.value);

    //   console.log(data.value);
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};
getPost2();

const getPost3 = async () => {
  try {
    const apiData = document.getElementById("apiData2");

    const res = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await res.json();

    if (!res.ok) {
      return data.error;
    }

    apiData.textContent = JSON.stringify(data.value);

    //   console.log(data.value);
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};

getPost3();
const getPost4 = async () => {
  try {
    const apiData = document.getElementById("apiData3");

    const res = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await res.json();

    if (!res.ok) {
      return data.error;
    }

    apiData.textContent = JSON.stringify(data.value);

    //   console.log(data.value);
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};

getPost4();

var categorias = document.getElementById("categorias");

const getPost5 = async () => {
  try {
    const apiData = document.getElementById("categorias");

    const res = await fetch(`https://api.chucknorris.io/jokes/categories`);
    const data = await res.json();

    if (!res.ok) {
      return data.error;
    }

    data.forEach((elemento) => {
      let card = `
            <div class="card">
                <div class="card-conteudo">
                    <h2>${elemento}</h2>
                </div>
            </div>    
        `;
      categorias.innerHTML += card;
    });

    //     apiData.textContent = JSON.stringify(data);

    //     data.forEach((element) => {
    //       // apiData.textContent = JSON.stringify(data);
    //       // console.log(`${element}`);
    //     });
    // //   console.log(data.value);
  } catch (error) {
    console.log(`Erro - ${error}`);
  }
};
getPost5();

const cadastarJoke = async () => {
  // preventDefult();

  let titulo = document.getElementById("titulo");
  let curiosidade = document.getElementById("curiosidade");

  let confirmacao = confirm(`${titulo.value}\n\n${curiosidade.value}`);
  
  alert(confirmacao ? "Joke Cadastrada!" : "Joke Não Cadastrada! Tente Novamente!");
}
