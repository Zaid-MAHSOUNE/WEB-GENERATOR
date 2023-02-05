import {useForm} from 'react-hook-form'; 
export const TxtForm = () => {
    const {register,handleSubmit} = useForm();

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