ficha.addEventListener("change", (event) => {
  const ficha = event.target.value;
  if(ficha){
    fetch(`/empresa/aprendices/${ficha}`)
    .then((response) => response.json())
    .then((aprendices) =>{
      const aprendicesSelect = document.getElementById("aprendices");
      aprendices.forEach(aprendiz => {
        const option = document.createElement('option');
        option.value = aprendiz.nombre+" "+aprendiz.apellido;
        option.textContent = aprendiz.nombre+" "+aprendiz.apellido;
        aprendicesSelect.appendChild(option);
      });
    })
    .catch((err) =>{
      console.log("Error al obtener los aprendices ", err)
    })
  }
});


aprendices.addEventListener("click", event => {
  const nombre = event.target.value;
  const integrante = document.getElementById("integrantes");
  integrante.value += nombre+"-";
});