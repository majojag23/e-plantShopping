// Archivo de PRUEBA de DevSentinel. TODAS las claves son falsas; sirven solo para ejercitar el escáner.
const GITHUB_TOKEN = "ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const STRIPE_KEY = "rk_live_FAKEFAKEFAKEFAKE1234";
const GOOGLE_KEY = "AIzaSyFAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKE0";
const SLACK_TOKEN = "xoxb-123456789012-FAKEFAKEFAKE";
const dbPassword = "contraseña-super-secreta-123";
const PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
FAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKE
-----END RSA PRIVATE KEY-----`;

const https = require('https');
const crypto = require('crypto');
const { exec } = require('child_process');

const agente = new https.Agent({ rejectUnauthorized: false });
app.use(cors({ origin: '*' }));

function sesion() {
  return Math.random().toString(36).slice(2);
}
const sessionToken = Math.random().toString(36);

function huella(clave) {
  return crypto.createHash('md5').update(clave).digest('hex');
}

function listar(carpeta) {
  exec('ls ' + carpeta);
}

function renderizar(panel, contenido) {
  panel.innerHTML = contenido;
}

// --- Ronda 2: más fallos de PRUEBA (todos falsos) ---
const AWS_SECRET = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const adminPassword2 = "otra-clave-falsa-9876";
const NEW_GITHUB_TOKEN = "github_pat_FAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKE12";

function evaluar(expresion) {
  return new Function('return ' + expresion)();
}

function borrarCarrito(db, id) {
  return db.query(`DELETE FROM carts WHERE id = ${id}`);
}

function escribir(texto) {
  document.write(texto);
}

const Vista = ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

function permitirTodo(res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://myapp.com');
}

const otroToken = Math.random().toString(16);
const firma = crypto.createHash('sha1').update(datos).digest('hex');

function limpiar(ruta) {
  exec(`rm -rf ${ruta}`);
}
