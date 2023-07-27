import Input from "../../utils/forms/Input";
import { useForm } from "react-hook-form";

const CreateItem = ({ handleCreate }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)

    const onSubmit = (data) => {
        handleCreate({...data, url: "https://www.google.com"});
        console.log(data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
                <div className="flex mb-4">
                    <Input typeInput="text" labelText="Nombre *" register={register} registerAs="title"  />
                </div>
                <div className="flex gap-4 mb-4">
                    {/* <Input typeInput="text" labelText="Código *" register={register} registerAs="code"  /> */}
                    <Input typeInput="number" labelText="Cantidad *" register={register} registerAs="quantity" />
                </div>
                <div className="flex mb-4">
                    <Input typeInput="number" labelText="Precio *" register={register} registerAs="price"  />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label className="block text-sm font-medium text-gray-700 font-['Inter', sans-serif]">
                        Descripción
                    </label>
                    <textarea className="p-2 block w-full rounded-md shadow-sm sm:text-sm border-2 border-[#A3A3A3]/40 bg-[#CDCDCD]/40 h-32" {...register("description")}/>
                </div>
                <div className="flex justify-center">
                    <button className="flex justify-center items-center bg-[#91BC4C] rounded-[8px] w-full py-3 text-white font-semibold">
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateItem;
