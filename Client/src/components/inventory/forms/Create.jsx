import Input from "../../utils/forms/Input";

const CreateItem = () => {
    return (
        <div>
            <div className="mt-2">
                <div className="flex gap-4 mb-4">
                    <Input typeInput="text" labelText="Código *" />
                    <Input typeInput="text" labelText="Cantidad *" />
                </div>
                <div className="flex mb-4">
                    <Input typeInput="text" labelText="Nombre *" />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label className="block text-sm font-medium text-gray-700 font-['Inter', sans-serif]">
                        Descripción
                    </label>
                    <textarea className="p-2 block w-full rounded-md shadow-sm sm:text-sm border-2 border-[#A3A3A3]/40 bg-[#CDCDCD]/40 h-32"/>
                </div>
                <div className="flex justify-center">
                    <button className="flex justify-center items-center bg-[#91BC4C] rounded-[8px] w-full py-3 text-white font-semibold">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateItem;
