import "./style.css";
window.onload = function() {
  let quien = [
    "mi perro",
    "el vecino",
    "mi novia",
    "mi hermano",
    "mi amigo",
    "mi papa"
  ];
  let accion = ["se comio", "mojo", "rompio", "robo", "escondio", "vendio"];
  let que = [
    "la tarea",
    "el celular",
    "mis tenis",
    "mi ropa",
    "las llaves",
    "mi cartera"
  ];
  let cuando = [
    "cuando me bañaba",
    "cuando dormia",
    "cuando comia",
    "cuando no estaba",
    "cuando estudiaba",
    "cuando hacia ejercicio"
  ];

  document.querySelector(".excusa").innerHTML =
    quien[Math.floor(Math.random() * quien.length)] +
    " " +
    accion[Math.floor(Math.random() * accion.length)] +
    " " +
    que[Math.floor(Math.random() * que.length)] +
    " " +
    cuando[Math.floor(Math.random() * cuando.length)];

  document.getElementById("#boton");
  addEventListener("click", _ => {
    window.location.reload(true);
  });
};
