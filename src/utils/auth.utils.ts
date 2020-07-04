import Swal from 'sweetalert2';

interface UserData {
    name: string;
    email: string;
}

export const isLoggedIn = () => {
    const user = sessionStorage.getItem('auth_token');

    if (user === null) {
        return false;
    }

    try {
        const data = JSON.parse(user);

        if (data.email && data.name) {
            return true;
        }
        
        return false;
    } catch (error) {
        return false;
    }
}

export const setAuth = (token: string) => {
    sessionStorage.setItem('auth_token', token);
}

export const logOff = () => {
    sessionStorage.removeItem('auth_token');
}