/* eslint-disable react/prop-types */


const Input = ({ typeInput, labelText, defaultValue }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="block text-sm font-medium text-gray-700 font-['Inter', sans-serif]">
                {labelText}
            </label>
            <input 
                type={typeInput} 
                className="block w-full rounded-md shadow-sm sm:text-sm border-2 border-[#A3A3A3]/40 bg-[#CDCDCD]/40 h-10 p-2" 
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default Input;