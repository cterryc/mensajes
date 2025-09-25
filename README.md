# 📄 README: WhatsApp Form Sender

Este proyecto es una aplicación React sencilla que permite a los usuarios ingresar su nombre, fecha y lugar en un formulario, y luego enviar esa información directamente a un número de WhatsApp mediante un enlace preformateado.

🚀 ##Características

Formulario con tres campos: Nombre, Fecha y Lugar.

Enlace dinámico a WhatsApp con los datos ingresados.

Uso de useState para manejar el estado de los inputs (useState).

Uso de useEffect para registrar cambios en consola (useEffect).

Estilos básicos en línea para disposición visual.

## 🧩 Tecnologías utilizadas

React

React Router (Link) (Link)

CSS (archivo App.css) ([App.css])

WhatsApp API (wa.me) ([wa.me])

## 📦 Instalación

Clona el repositorio:

```bash 
git clone https://github.com/tu-usuario/whatsapp-form-sender.git cd whatsapp-form-sender
```

Instala las dependencias:

```bash
npm install
```

Inicia la aplicación:

```bash
npm start
```

## 📝 Uso

Ingresa tu nombre, fecha y lugar en el formulario.

Haz clic en el botón Enviar.

Se abrirá WhatsApp con un mensaje preformateado como:

```
*Nombre: Daniel*
*Fecha: 25/09/2025*
*Lugar: Lima*
```

El mensaje estará listo para ser enviado al número +51 931557353 (+51 931557353).

## 📁 Estructura del código

```js
useState → para capturar los valores de los inputs
useEffect → para registrar los cambios en consola
Link → para redirigir al enlace de WhatsApp con los datos codificados
```

## 📌 Nota importante

Este proyecto utiliza un número de WhatsApp fijo (+51 987654321) (+51 987654321). Puedes modificarlo en el componente App.js ([App.js]) si deseas enviar los datos a otro número.

🛠️ ##Personalización

Para cambiar el estilo del formulario, edita el archivo App.css ([App.css]) o modifica los estilos en línea dentro del componente.
