import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from './Contato.module.css';

const schema = yup.object({
    name: yup.string().notRequired().min(3, 'Nome deve conter no mínimo 3 letras').trim(),
    email: yup.string().email('Email inválido!').required('Campo de email obrigatório!')
}).required();

export const Contato = () => {

    const { register,
        handleSubmit,
        formState: { errors } } =
        useForm({
            resolver: yupResolver(schema)
        })

    const onSubmitForm = (data: any) => console.log(data);

    return (
        <main className={style.fundo} >
            <form className={style.form} onSubmit={handleSubmit(onSubmitForm)}>

                <div className={style.boxForm}>
                    <h1>Deixe sua Opinião</h1>
                    <div className={style.campos}>
                        <label htmlFor="">Nome:</label>
                        <input type='text' {...register('name')} required />
                    </div>

                    <div className={style.campos}>
                        <label >E-mail: </label>
                        <input type='email' {...register('email')} required></input>

                    </div>

                    <div className={style.campos}>
                        <label >Mensagem: </label>
                        <textarea {...register('description')} required></textarea>
                    </div>

                    <div>
                        <button className={style.botaoEnviar} type='submit'>Enviar</button>
                    </div>
                </div>
            </form>
        </main>

    )
}

