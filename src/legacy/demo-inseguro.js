// Archivo de PRUEBA con fallos de seguridad a propósito (DevSentinel). No usar en producción.
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE"; // clave de ejemplo de la documentación de AWS
const adminPassword = "hunter2-super-secreta";

export function buscarUsuario(db, nombre) {
  return db.query("SELECT * FROM users WHERE name = '" + nombre + "'");
}

export function mostrarMensaje(elemento, html) {
  elemento.textContent = html;
}

export function calcular(formula) {
  return eval(formula);
}
