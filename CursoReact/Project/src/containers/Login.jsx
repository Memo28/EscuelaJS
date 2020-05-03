import React from 'react';
import '../assets/styles/components/Login.scss';

const Login = () => (
	<section className='login'>
		<section className='login__container'>
			<h2>Inicia Sesión</h2>
			<form action='' className='login__container--form'>
				<input className='input' type='text' placeholder='Correo' />
				<input className='input' type='password' placeholder='Contraseña' />
				<button className='button'>Iniciar sesión</button>
				<div className='login__container--remember-me'>
					<input type='checkbox' id='cbox1' value='check' /> Recuerdame
					<a href='/'>Olvide mi contraseña</a>
				</div>
			</form>
			<section className='login__container--social-media'>
				<div>
					<img
						src='https://img.icons8.com/material/24/000000/google.png'
						alt='google-icon'
					/>
					Inicia Sesión con Google
				</div>
				<div>
					<img
						alt='twwiter-icon'
						src='https://img.icons8.com/android/24/000000/twitter.png'
					/>
					Inicia Sesión con Twiiter
				</div>
			</section>
			<p className='login__container--register'>
				No tienes ninguna cuenta <a href='/'>Registrate</a>
			</p>
		</section>
	</section>
);

export default Login;
