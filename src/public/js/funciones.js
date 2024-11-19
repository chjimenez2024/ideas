sector.addEventListener('change', (event) => {
  const sectorId = event.target.value;
  if (sectorId) {
    fetch(`/ideas/puntos-sector/${sectorId}`)
      .then((response) => response.json())
      .then((puntaje) => {
        ptos.value = puntaje;  // Asignar el puntaje 
      })
      .catch((err) => {
        console.error('Error al obtener el puntaje: ', err);
      });
  }
});

innovacion.addEventListener("change", (event) => {
  const innovacionId = event.target.value;
  if(innovacionId){
    fetch(`/ideas/puntos-factor/${innovacionId}`)
      .then((response) => response.json())
      .then((puntaje) => {
        ptosfactor.value = puntaje;
      })
      .catch((err) => {
        console.log("Error al obtener puntaje ", err);
      });
  }
});

conocimiento.addEventListener("change", (event) => {
  const conocimientoId = event.target.value;
  if(conocimientoId){
    fetch(`/ideas/puntos-experiencia/${conocimientoId}`)
      .then((response) => response.json())
      .then((puntos) => {
        ptoscon.value = puntos;
      })
      .catch((err) => {
        console.log("Error al obtener el puntaje ", err);
      });
  }
});

btnTotal.addEventListener("click", (event) =>{
  event.preventDefault();
  let msj="";
  const ptosSector=document.getElementById("ptos").value;
  const ptosInnovacion=document.getElementById("ptosfactor").value;
  const ptosConocimiento=document.getElementById("ptoscon").value;
  const total=parseFloat(ptosInnovacion)+parseFloat(ptosSector)+parseFloat(ptosConocimiento);
  document.getElementById("ptostotal").value=total;
  if (total<=55)
    msj="B. DESARROLLO";
  else if (total>55 && total<=74)
    msj="M. DESARROLLO";
  else if (total>74 && total<=89)
    msj="M. ALTO DESARROLLO";
  else
    msj="A. DESARROLLO";
    document.getElementById("fuentes").value=msj;
});
