import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleSetUsers }) {
  const { register, handleSubmit, reset } = useForm();
  const handleOnSubmit = (data) => {
    handleSetUsers(data);
    reset();
  };

  return (
    <div className="mt-10 flex w-full flex-col justify-center p-4">
      <form
        action=""
        className="flex justify-center gap-5"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <input
          {...register("name")}
          className="rounded-md bg-white px-3 py-1 font-semibold text-black shadow-md outline-none"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className="rounded-md bg-white px-3 py-1 font-semibold text-black shadow-md outline-none"
          type="email"
          placeholder="email"
        />
        <input
          {...register("image")}
          className="rounded-md bg-white px-3 py-1 font-semibold text-black shadow-md outline-none"
          type="text"
          placeholder="image url"
        />
        <input
          className="cursor-pointer rounded-md bg-pink-800 px-3 py-1 text-sm text-white shadow-md"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
