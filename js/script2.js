 const getPost2 = async () => {
    
    try {
        const apiData = document.getElementById('apiData')
      
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
        const apiData = document.getElementById('apiData2')
      
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
        const apiData = document.getElementById('apiData3')
      
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

