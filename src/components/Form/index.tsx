import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import styles from './Form.module.css';

const schema = yup.object({
    firstName: yup.string().required('Nome obrigatório!'),
    email: yup.string().email('Email inválido!').required('Campo de email obrigatório!'),
    message: yup.string().required('Mensagem obrigatória!'),
}).required();
type FormData = yup.InferType<typeof schema>;

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => console.log(data);

    return (
        <main className={styles.body}>
            <div className={styles.boxForm}>
                <h1 className={styles.titulo}>Contato</h1>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={`${styles.formItem} ${styles.colResponsive}`}>
                        <input className={styles.input} {...register("firstName")} />
                        <label className={styles.label}>Nome:</label>
                        <p>{errors.firstName?.message}</p>
                    </div>
                    <div className={`${styles.formItem} ${styles.colResponsive}`}>
                        <input className={styles.input} {...register("email")} />
                        <label className={styles.label} >E-mail:</label>
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className={styles.formItem}>
                        <textarea className={styles.textArea} {...register("message")} />
                        <label className={styles.label}>Mensagem:</label>
                        <p>{errors.message?.message}</p>
                    </div>
                    <div className={styles.formItem}>
                        <input className={styles.button} type="submit" />
                    </div>
                </form>
            </div>
        </main>
    );
}
export default Form;
