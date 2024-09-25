"use client"


import { useForm } from 'react-hook-form';
import Link from "next/link";



const RegisterForm = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const submithandler = () => {
        const formData={
            userName:watch("userName"),
            disName:watch("displayName"),
            email:watch("email"),
            password:watch("password")
        }
        console.log(formData)
    }
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="bg-gray-100 border border-gray-200 w-96 p-4 rounded-md my-10 ">
                <div className="flex justify-center items-center gap-4 w-full pb-6 pt-3">
                    <h4>ثبت نام در سایت</h4>
                    <Link href={"/login"} className="bg-orange-400 py-1 px-5 rounded-md text-white ">ورود کاربر</Link>
                </div>

                <form onSubmit={handleSubmit(submithandler)} className="flex flex-col gap-5">


                    <input type="text" className="w-full py-2 px-3 rounded-md outline-none" placeholder="نام کاربری"
                        {...register('userName', {
                            required: true,
                            minLength: 6,
                            maxLength: 20
                        })}
                    />
                    {
                        errors.userName && errors.userName.type == "required" &&
                        <p className='text-red-400 text-sm'>نام کاربری مورد نیاز است</p>
                    }
                    {
                        errors.userName && errors.userName.type == "minLength" &&
                        <p className='text-red-400 text-sm'>حداقل تعداد کاراکتر 6 می باشد</p>
                    }
                    {
                        errors.userName && errors.userName.type == "maxLength" &&
                        <p className='text-red-400 text-sm'>حداکثر تعداد کاراکتر 20 می باشد</p>
                    }


                    <input type="text" className="w-full py-2 px-3 rounded-md outline-none" placeholder="نام نمایشی"
                        {...register('displayName', {
                            required: true,
                            minLength: 6,
                            maxLength: 20
                        })}
                    />
                    {
                        errors.displayName && errors.displayName.type == "required" &&
                        <p className='text-red-400 text-sm'>نام نمایشی مورد نیاز است</p>
                    }
                    {
                        errors.displayName && errors.displayName.type == "minLength" &&
                        <p className='text-red-400 text-sm'>حداقل تعداد کاراکتر 6 می باشد</p>
                    }
                    {
                        errors.displayName && errors.displayName.type == "maxLength" &&
                        <p className='text-red-400 text-sm'>حداکثر تعداد کاراکتر 20 می باشد</p>
                    }


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
                        <p className='text-red-400 text-sm'>الگوی ایمیل صحیح نیست</p>
                    }



                    <input type="password" className="w-full py-2 px-3 rounded-md outline-none" placeholder="رمز ورود"
                        {...register('password', {
                            required: true,
                            minLength: 6
                        })}
                    />
                    {
                        errors.password && errors.password.type == "required" &&
                        <p className='text-red-400 text-sm'>رمز ورود مورد نیاز است</p>
                    }
                    {
                        errors.password && errors.password.type == "minLength" &&
                        <p className='text-red-400 text-sm'>حداقل تعداد کاراکتر 6 می باشد</p>
                    }
                    {
                        errors.password && errors.password.type == "maxLength" &&
                        <p className='text-red-400 text-sm'>حداکثر تعداد کاراکتر 20 می باشد</p>
                    }



                    <input type="password" className="w-full py-2 px-3 rounded-md outline-none" placeholder="تکرار رمز ورود"
                        {...register('rePassword', {
                            required: true,
                            validate:(val)=>val===watch("password")
                        })}
                    />
                    {
                        errors.rePassword && errors.rePassword.type == "required" &&
                        <p className='text-red-400 text-sm'>تکرار رمز ورود مورد نیاز است</p>
                    }
                    {
                        errors.rePassword && errors.rePassword.type == "validate" &&
                        <p className='text-red-400 text-sm'>رمز عبور یکسان نیست</p>
                    }


                    <input type="submit" value="ثبت نام" className="w-full py-2 rounded-md bg-orange-400 cursor-pointer text-white" />
                </form>
            </div>
        </section>
    );
}

export default RegisterForm;