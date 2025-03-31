import express from "express";

//Se crea una instancia para que regrese el app
const app = express();

//Se le dice a la app que use la crpeta de manera estatica para que use a todos los archivos html
//para cumplir su funcion de servidor web.
app.use(express.static("public"));
//Todo lo que quieras que se vea en la pagina tiene que estar en la carpeta public
//Incluidas imagnees y cosas asi

//El primero es el puerto y el segundo el callback
//Escucha el puerto y en seguida hace algo
const port = 4001;
app.listen(port,console.log("http://localhost:"+port));
