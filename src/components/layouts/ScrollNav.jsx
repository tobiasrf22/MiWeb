import React, { useEffect } from 'react';

export const ScrollNav = () => {
  useEffect(() => {
    const scrollNav = () => {
      const enlaces = document.querySelectorAll('.navegacion-principal a, .boton-bajar a');

      enlaces.forEach((enlace) => {
        enlace.addEventListener('click', function (e) {
          e.preventDefault();
          const seccion = document.querySelector(e.target.attributes.href.value);

          // En React, es mejor manejar el desbordamiento con estilos de componente
          document.body.style.overflow = 'auto';

          seccion.scrollIntoView({
            behavior: 'smooth',
          });
        });
      });
    };

    scrollNav();

    // Limpieza del event listener al desmontar el componente
    return () => {
      const enlaces = document.querySelectorAll('.navegacion-principal a, .boton-bajar a');
      enlaces.forEach((enlace) => {
        enlace.removeEventListener('click', scrollNav);
      });
    };
  }, []); // El segundo argumento del useEffect es un array de dependencias, en este caso, está vacío para que se ejecute solo una vez al montar el componente

  return (
    <div>
      {/* Tu JSX para la navegación y otros elementos */}
    </div>
  );
};


