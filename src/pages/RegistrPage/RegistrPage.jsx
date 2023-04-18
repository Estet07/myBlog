import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './registrpage.module.css'
import Button from '@mui/material/Button';
import { authServices } from '../../services/auth';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegistrPage = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [name, setName] = useState('')

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: ''
        },
        onSubmit: async (values) => {
            
            try {
                const { data } = await registration(values)
                console.log(data._doc);
                toast('пользователь зарегестрирован')
            }catch (err) {
                toast("Email или Имя уже существует")
            }
        }
    });

    const { registration } = authServices();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const newUser = {
    //         username: name,
    //         email,
    //         password, 
    //     };
    //     try {
    //         const { data } = await registration(newUser)
    //         console.log(data._doc);
    //     }catch (err) {
    //         console.log(err.response.data);
    //     }
        
    // }
 
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>
                Регистрация
            </h1>
            <form className={styles.form}onSubmit={formik.handleSubmit}>
                <TextField 
                label="Ваш Email" 
                variant="filled"
                type='email'
                name='email' 
                required
                fullWidth
                style={{ marginBottom: "20px"}}
                value={formik.values.email}
                onChange={formik.handleChange}
                />
                <TextField 
                label="Ваше имя" 
                variant="filled"
                type='text' 
                name='username' 
                required
                fullWidth
                style={{ marginBottom: "20px"}}
                value={formik.values.username}
                onChange={formik.handleChange}
                />
                <TextField 
                label="Ваш пароль" 
                variant="filled"
                type='password' 
                name='password' 
                required
                fullWidth
                style={{ marginBottom: "40px"}}
                value={formik.values.password}
                onChange={formik.handleChange}
                />
                <Button
                    fullWidth 
                    type="submit" 
                    variant="contained"
                    style={{backgroundColor: "#BF94E8", fontSize: "24px"}}
                >
                    Зарегестрироваться
                </Button>
            </form>
            <ToastContainer />
        </section>
    );
};

export default RegistrPage;