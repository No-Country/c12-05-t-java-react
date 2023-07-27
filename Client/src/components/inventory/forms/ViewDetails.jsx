import PropTypes from 'prop-types';

const ViewDetails = ({ item }) => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-bold flex gap-2 text-lg'>
                Nombre: 
                <span>
                    {item.title}
                </span>
            </h1>
            <div>
                <p>Descripción: </p>
                <p>{item.description}</p>
            </div>
            <div className='flex justify-around rounded-md bg-yellow-200 p-2'>
                <div className='flex gap-2'>
                    <p>Cantidad: </p>
                    {item.quantity}
                </div>
                <div className='flex gap-2'>
                    <p>Precio: </p>
                    {item.price}
                </div>
            </div>
        </div>
    );
}

ViewDetails.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ViewDetails;
