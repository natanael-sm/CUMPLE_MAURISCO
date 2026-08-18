// LOGIN CREDENCIALES DE ACCESO

const EDAD_MAURISCO = 25;
const USUARIO_CORRECTO = "maurisco";

// ELEMENTOS

const login = document.getElementById("login");
const inicio = document.getElementById("inicio");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const btnEntrar = document.getElementById("btnEntrar");

const celebracionFinal = document.getElementById("celebracionFinal");
const btnCerrarCelebracion = document.getElementById("btnCerrarCelebracion");
const confeti = document.getElementById("confeti");
const mensajeError = document.getElementById("mensajeError");
const edadMostrada = document.getElementById("edadMostrada");

// MOSTRAR EDAD
edadMostrada.textContent = EDAD_MAURISCO;

// LOGIN
btnEntrar.addEventListener("click", iniciarSesion);


//FUNCIONES CLICK ENTER
password.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {

        iniciarSesion();

    }

});

function iniciarSesion() {

    const nombreIngresado =
        usuario.value
        .trim()
        .toLowerCase();

    const passwordIngresado =
        password.value.trim();


    if (
        nombreIngresado === USUARIO_CORRECTO &&
        passwordIngresado === String(EDAD_MAURISCO)
    ) {

        mensajeError.innerHTML =
            "🐠 Identidad confirmada...";

        login.classList.add("sumergiendo");


        setTimeout(() => {

            login.classList.remove(
                "activa",
                "sumergiendo"
            );

            inicio.classList.add("activa");

        }, 850);

    }

    else {

        mostrarError();

    }

}

// ERROR MENSAJE

const errores = [

    "🐙 El pulpo guardián dice que esos datos no son correctos...",
    "🦈 Un tiburón revisó la contraseña y dijo que nel 😅",
    "🐠 Creo que algún pez olvidó su propia edad...",
    "🦀 El cangrejo de seguridad bloqueó el acceso.",
    "🌊 Intenta recordar cuántas vueltas al sol llevas..."
];

function mostrarError() {

    const numero =
        Math.floor(
            Math.random() * errores.length
        );

    mensajeError.textContent =
        errores[numero];


    const card = document.querySelector(".login-card");


    card.animate(

        [
            { transform: "translateX(0)" },
            { transform: "translateX(-12px)" },
            { transform: "translateX(12px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(0)" }
        ],

        {
            duration: 400
        }

    );

}

// BUCLE BURBUJAS

const contenedorBurbujas = document.getElementById("burbujas");

function crearBurbuja() {

    const burbuja = document.createElement("div");

    burbuja.classList.add("burbuja");

    const tamaño = Math.random() * 35 + 10;

    burbuja.style.width =
        tamaño + "px";

    burbuja.style.height =
        tamaño + "px";

    burbuja.style.left =
        Math.random() * 100 + "%";

    burbuja.style.animationDuration =
        (Math.random() * 7 + 6) + "s";

    contenedorBurbujas.appendChild(
        burbuja
    );

    setTimeout(() => {

        burbuja.remove();

    }, 14000);

}

// BUCLE POR GX GY BURBUJAS

setInterval(
    crearBurbuja,
    450
);


// STOP BURBUJAS AL INICIO

for(let i = 0; i < 15; i++) {

    setTimeout(
        crearBurbuja,
        i * 150
    );

}

// BOTON AVENTURA & MAPA DE AVENTURA

const aventura = document.getElementById("aventura");

const zonas = document.querySelectorAll(".zona[data-zona]");

const tesoroFinal = document.getElementById("tesoroFinal");

const progreso = document.getElementById("progreso");

const modal = document.getElementById("modal");

const cerrarModal = document.getElementById("cerrarModal");

const iconoModal = document.getElementById("iconoModal");

const tituloModal = document.getElementById("tituloModal");

const textoModal = document.getElementById("textoModal");


let secretosEncontrados = [];

// BOTON COMENZAR AVENTURA

btnAventura.addEventListener(
    "click",
    function() {

        inicio.classList.remove("activa");

        aventura.classList.add("activa");

    }
);

// CONTENIDO DE CADA ZONA

const secretos = {

    recuerdos: {

        icono: "🏝️",

        titulo:
            "Isla de los Recuerdos",

        texto:
            "Los mejores años no se cuentan solamente con números, sino con las historias, las risas y los buenos momentos que dejamos en el camino. Y a los 25 todavía quedan muchísimas aventuras por vivir. 🌊"

    },


    concha: {

        icono: "🐚",

        titulo:
            "La Concha Mágica",

        texto:
            "Dicen que si acercas una concha al oído puedes escuchar el mar... pero esta dice otra cosa: que tengas un año lleno de éxitos, tranquilidad, buena salud y muchos momentos que valga la pena recordar. 🐚✨"

    },


    botella: {

        icono: "🍾",

        titulo:
            "Mensaje Perdido",

        texto:
            "Después de navegar miles de kilómetros, apareció este mensaje: Nunca dejes de disfrutar las cosas simples, las buenas amistades y esas experiencias que terminan convirtiéndose en las mejores historias. 🍾🌊"

    },


    estrella: {

        icono: "⭐",

        titulo:
            "Estrella de los Deseos",

        texto:
            "Tienes un deseo disponible. No sabemos si la estrella pueda cumplirlo, pero al menos esperamos que este nuevo año venga cargado de cosas buenas. ⭐😂"

    }

};


// CLICK EN LOS SECRETOS

zonas.forEach(
    function(zona) {

        zona.addEventListener(
            "click",
            function() {

                const nombreZona = zona.dataset.zona;

                const secreto = secretos[nombreZona];


                iconoModal.textContent =
                    secreto.icono;

                tituloModal.textContent =
                    secreto.titulo;

                textoModal.textContent =
                    secreto.texto;

                modal.classList.add("activo");


                // marcar como visitada

                if (
                    !secretosEncontrados.includes(
                        nombreZona
                    )
                ) {

                    secretosEncontrados.push(
                        nombreZona
                    );

                    zona.classList.add(
                        "completada"
                    );

                    actualizarProgreso();

                }

            }
        );

    }
);

// ACTUALIZAR PROGRESO

function actualizarProgreso() {

    progreso.textContent =
        secretosEncontrados.length +
        " de 4 secretos encontrados";


    if(secretosEncontrados.length === 4) {

        desbloquearTesoro();

    }

}

// DESBLOQUEAR TESORO

function desbloquearTesoro() {

    tesoroFinal.classList.remove(
        "bloqueado"
    );

    tesoroFinal.innerHTML =
        "🎁 <span>Tesoro desbloqueado</span>";

    progreso.textContent =
        "🎉 ¡El tesoro final ha sido desbloqueado!";

}

// TESORO FINAL

tesoroFinal.addEventListener(
    "click",
    function() {

        if(secretosEncontrados.length < 4) {

            iconoModal.textContent =
                "🔒";

            tituloModal.textContent =
                "Tesoro bloqueado";

            textoModal.textContent =
                "Primero necesitas encontrar los 4 secretos escondidos en el océano.";

            modal.classList.add(
                "activo"
            );

            return;
        }

        iniciarCelebracionFinal();
    }
);

// CERRAR MODAL

cerrarModal.addEventListener(
    "click",
    function() {

        modal.classList.remove(
            "activo"
        );

    }
);

modal.addEventListener(
    "click",
    function(event) {

        if(event.target === modal) {

            modal.classList.remove(
                "activo"
            );

        }

    }
);

// CELEBRACION NIVEL 25

function iniciarCelebracionFinal() {

    celebracionFinal.classList.add(
        "activa"
    );

    crearConfeti();

    crearBurbujasDoradas();

}

// CREAR CONFETI

function crearConfeti() {

    confeti.innerHTML = "";

    const colores = [
        "#ffd166",
        "#06d6a0",
        "#ef476f",
        "#ffffff",
        "#48cae4",
        "#f77f00"
    ];


    for(let i = 0; i < 120; i++) {

        const pieza =
            document.createElement("div");

        pieza.classList.add(
            "pieza-confeti"
        );


        pieza.style.left =
            Math.random() * 100 + "%";


        pieza.style.backgroundColor =
            colores[
                Math.floor(
                    Math.random() *
                    colores.length
                )
            ];


        pieza.style.animationDuration =
            (
                Math.random() * 3 + 3
            ) + "s";


        pieza.style.animationDelay =
            (
                Math.random() * 2
            ) + "s";


        pieza.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        confeti.appendChild(
            pieza
        );

    }

}

// 25 BURBUJAS DORADAS

function crearBurbujasDoradas() {

    for(let i = 0; i < 25; i++) {

        setTimeout(
            function() {

                const burbuja =
                    document.createElement("div");

                burbuja.classList.add(
                    "burbuja-dorada"
                );


                const tamaño =
                    Math.random() * 30 + 15;


                burbuja.style.width =
                    tamaño + "px";

                burbuja.style.height =
                    tamaño + "px";


                burbuja.style.left =
                    Math.random() * 100 + "%";


                burbuja.style.animationDuration =
                    (
                        Math.random() * 3 + 4
                    ) + "s";


                document.body.appendChild(
                    burbuja
                );


                setTimeout(
                    function() {

                        burbuja.remove();

                    },
                    8000
                );

            },
            i * 100
        );

    }

}

// CERRAR CELEBRACION

btnCerrarCelebracion.addEventListener(
    "click",
    function() {

        celebracionFinal.classList.remove(
            "activa"
        );

    }
);