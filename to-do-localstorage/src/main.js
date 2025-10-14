// IMPORTACIONES
import { dbTareas } from "./db/db";
import mostrarTarea, { rellenarLocalStorage } from "./helpers/tareas";

const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;


// INICIO

rellenarLocalStorage(dbTareas,"Tareas");
mostrarTarea();

