const getPost2 = async () => {
  try {
    const apiData = document.getElementById("p1");

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
    const apiData = document.getElementById("p2");

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
    const apiData = document.getElementById("p3");

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

const getAll = async () => {
  try {
    const apiData = document.getElementById("categorias");

    const res = await fetch(`https://api.chucknorris.io/jokes/categories`);
    const data = await res.json();

    if (!res.ok) {
      return data.error;
    }

    data.forEach((elemento) => {
      let card = `
            <div class="card-categoria">
              <h2>${elemento}</h2>
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
getAll();

const cadastarJoke = async () => {
  // preventDefult();

  let titulo = document.getElementById("titulo");
  let curiosidade = document.getElementById("curiosidade");

  let confirmacao = confirm(`${titulo.value}\n\n${curiosidade.value}`);
  
  alert(confirmacao ? "Joke Cadastrada!" : "Joke Não Cadastrada! Tente Novamente!");
}

const deleteCategoria = async (category) => {
    try {
      const res = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      console.log("categoria deletada");
      console.log(data);
  
      if (!res.ok) {
        console.log(data.description);
        return;
      }
    } catch (error) {
      console.log(`Erro`);
    }
  };
  
deleteCategoria("animal");
  
const createJoke = async (novaCuriosidadeJSON) => {
    try {
      const res = await fetch(`https://api.chucknorris.io/jokes/random`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: novaCuriosidadeJSON,
      });
  
      const data = await res.json();
      console.log("Inserir nova curiosidade");
      console.log(data);
  
      if (!res.ok) {
        console.log(data.description);
        return;
      }
    } catch (error) {
      console.log(`Erro`);
    }
  };
  
  let curiosidadeNova = {
    value: "Chuck Norris é legal",
    id: "chuck"
  };
  
  let novaCuriosidadeJSON = JSON.stringify(curiosidadeNova);
  
createJoke(novaCuriosidadeJSON);
  
