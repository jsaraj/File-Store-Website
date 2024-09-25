"use client"


import { useForm } from 'react-hook-form';
import Link from "next/link";


const LoginForm = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();


    const submithandler = () => {
        const formData={
            email:watch("email"),
            password:watch("password")
        }
        console.log(formData)
    }


    return (
        <section className="flex flex-col justify-center items-center ">
            <div className="bg-gray-100 border border-gray-200 w-96 p-4 rounded-md my-10">
                <div className="flex justify-center items-center gap-5 w-full pb-6 pt-3">
                    <h4>ورود به حساب</h4>
                    <Link href={"/register"} className="bg-orange-400 py-1 px-4 rounded-md text-white">ثبت نام</Link>
                </div>

                <form onSubmit={handleSubmit(submithandler)} className="flex flex-col gap-6">
                    <input type="text" className="w-full py-2 px-3 rounded-md outline-none" placeholder="ایمیل"
                        {...register('email', {
                            required: true,
                            pattern:
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                    />
                    {
                        errors.email && errors.email.type == "required" &&
                        <p className='text-red-400 text-sm'>ایمیل مورد نیاز است</p>
                    }
                    {
                        errors.email && errors.email.type == "pattern" &&
                        <p className='text-red-400 text-sm'>الگوی ایمیل صحیح نمی باشد</p>
                    }


                    <input type="password" className="w-full py-2 px-3 rounded-md outline-none" placeholder="رمز ورود"
                        {...register('password', {
                            required: true,
                        })}
                    />
                    {
                        errors.password && errors.password.type == "required" &&
                        <p className='text-red-400 text-sm'>رمز ورود مورد نیاز است</p>
                    }



                    <input type="submit" value="ورود" className="w-full py-2 rounded-md bg-orange-400 cursor-pointer text-white" />
                </form>
            </div>
        </section>
    );
}

export default LoginForm;