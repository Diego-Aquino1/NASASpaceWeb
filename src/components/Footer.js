import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '10px', textAlign: 'center', backgroundColor: '#282c34', color: 'white', height:'160px' }}>
      <p>Sistema Solar.</p>
      <p>Clic Izquierdo en un Planeta: Muestra información del planeta en el panel derecho.</p>
      <p>Clic Izquierdo en la Vista: Rote la vista 3D del sistema solar.</p>
      <p>Clic Derecho en la Vista: Mueve la vista 3D del sistema solar.</p>
    </footer>
  );
}

export default Footer;
