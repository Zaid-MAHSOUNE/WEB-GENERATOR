import {useForm} from 'react-hook-form';
import * as yup from 'yup';
export const TxtForm = () => {
    const {register,handleSubmit} = useForm();

    const schema = yup.object.shape({

    });

    const onSubmit = (data) => {
        console.log(data.fullName);
    }

    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("fullName")}/>
            <input type="submit" />
        </form>
    );
}