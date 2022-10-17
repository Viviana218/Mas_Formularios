import React, { useState } from "react";

const Formulario = () => {

    //creando una variable por cada campo de mi formulario

    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [password2, setPassword2] =useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);

    const [firstNameError, setFirstNameError] =useState("");
    const [lastNameError, setLastNameError] =useState("");
    const [emailError, setEmailError] =useState("");
    const [passwordError, setPasswordError] =useState("");
    const [password2Error, setPassword2Error] =useState("");
    

    const crearUsuario = e => {
        e.preventDefault(); //prevenimos el comportamiento normal del submit de un formulario
        const nuevoUsuario = {firstName, lastName, email, password, password2}; //creando un objeto/diccionario con todas las variables que creamos previamente. Puede ser solo firstName, lastName y age o ponerle un nombre diferente a cada uno
        console.log("Nuevo registro:", nuevoUsuario);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setHizoSubmit(true);
    }
       
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("El nombre debe tener al menos 2 caracteres");
        } else {
            setFirstNameError('');
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("El Apellido debe tener al menos 2 caracteres");
        } else {
            setLastNameError('');
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("El Email debe tener al menos 5 caracteres");
        } else {
            setEmailError('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("El password debe tener al menos 8 caracteres");
        } else {
            setPasswordError('');
        }
    }

    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
        if(password !== e.target.value) {
            setPassword2Error("Debe coincidir con la información del password");
        } else {
            setPassword2Error('');
        }
    }

    const mensaje = () => {
        if (!hizoSubmit) {
            return (
                <div className="card">
                    <h3>Your Form Data</h3>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm password: {password2}</p>
                </div>
            );
        } else {
        return (
            <h3>¡Ingresaste tus datos correctamente!</h3>
        )
        }
    }


return (
    <form onSubmit={crearUsuario}>
        <div className="form-group">
            <label>Nombre:</label>
            <input type="text" className="form-control" onChange={handleFirstName}/>
            {
                firstNameError ?
                <p style={{color:'red'}} >{firstNameError}</p>:""
            }
        </div>
        <div className="form-group">
            <label>Apellido:</label>
            <input type="text" className="form-control" onChange={handleLastName}/>
            {
                lastNameError ?
                <p style={{color:'red'}} >{lastNameError}</p>:""
            }
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input type="text" className="form-control" onChange={handleEmail}/>
            {
                emailError ?
                <p style={{color:'red'}} >{emailError}</p>:""
            }
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" onChange={handlePassword}/>
            {
                passwordError ?
                <p style={{color:'red'}} >{passwordError}</p>:""
            }
        </div>
        <div className="form-group">
            <label>Confirma Password:</label>
            <input type="password" className="form-control" onChange={handlePassword2}/>
            {
                password2Error ?
                <p style={{color:'red'}} >{password2Error}</p>:""
            }
        </div>
        <input type="submit" className="btn btn-success" value="Crear usuario" />
        <br/>
        {mensaje()}

    </form>
)

}

export default Formulario;