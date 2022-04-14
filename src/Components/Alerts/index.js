import Swal from 'sweetalert2';

export const showErrorMessage = (message) => {
    Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: message
    });
}

export const showSuccessMessage = (message) => {
    Swal.fire({
        icon: 'success',
        title: '¡Exito!',
        text: message
    });
}