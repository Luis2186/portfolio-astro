// alert.js
import Swal from 'sweetalert2';

export function showAlert() {
  Swal.fire({
    title: '¡Hola!',
    text: 'Este es un mensaje de SweetAlert2.',
    icon: 'success',
    confirmButtonText: 'Aceptar',
  });
}