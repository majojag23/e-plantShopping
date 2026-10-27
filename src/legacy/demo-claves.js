// Archivo de PRUEBA de DevSentinel. TODAS las claves son falsas; sirven solo para ejercitar el escáner.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
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
