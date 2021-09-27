import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Input from '../../components/input';
import { setLogin } from '../../store/auth';
import { getData } from '../../store/dashboard/actions';
import { ILogin } from '../../types';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: ILogin) => {
    dispatch(setLogin(true));
    dispatch(getData(data.name));
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center space-x-4">
        <span className="font-semibold">Students Name:</span>
        <Input
          name="name"
          type="text"
          register={register("name", {
            validate: (value) => {
              if (!value.trim()) {
                return "Please enter student's name";
              }
            },
          })}
          error={errors.name}
        />
      </div>
      <div className="w-full flex justify-center">
        <button type="submit" className="py-1 px-3 border rounded-md text-sm font-medium focus:outline-none bg-gray-300 mx-auto">
          <span className="font-semibold">Login</span>
        </button>
      </div>
    </form>
  )
}

export default LoginPage
