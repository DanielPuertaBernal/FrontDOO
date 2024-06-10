import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { login } from '../../services/AuthService'; // Suponiendo que tienes un servicio de autenticación

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await login(data); // Suponiendo que tienes una función de login en tu servicio de autenticación
            alert("¡Inicio de sesión exitoso!");
            reset();
        } catch (error) {
            alert("Error al iniciar sesión");
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="container-text">
                <h2>Iniciar sesión</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" className="form-control" {...register('usuario', { required: true })} />
                    {errors.usuario?.type === 'required' && <p className="error-message">El usuario es requerido</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" className="form-control" {...register('contrasena', { required: true })} />
                    {errors.contrasena?.type === 'required' && <p className="error-message">La contraseña es requerida</p>}
                </div>

                <input type="submit" value="Iniciar sesión" className="btn btn-primary" />
            </form>
        </div>
    );
}

export default Login;
