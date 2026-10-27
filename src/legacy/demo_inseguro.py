# Archivo de PRUEBA de DevSentinel con fallos a propósito. No usar en producción.
import hashlib
import os
import pickle
import subprocess

import requests
import yaml


def ejecutar(cmd):
    os.system(cmd)


def ejecutar_shell(cmd):
    subprocess.run(cmd, shell=True)


def cargar(datos):
    return pickle.loads(datos)


def configuracion(archivo):
    return yaml.load(archivo)


def buscar(cursor, nombre):
    cursor.execute(f"SELECT * FROM users WHERE name = '{nombre}'")


def huella(clave):
    return hashlib.md5(clave.encode()).hexdigest()


def descargar(url):
    return requests.get(url, verify=False)
