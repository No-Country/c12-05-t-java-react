import React from "react";

export const Stock = () => {
  return (
    <div className="border-2 border-gray-400 col-span-3">
      <div className="flex justify-center py-8">
        <div className="relative overflow-auto shadow-md sm:rounded-lg w-5/6">
          <table className="w-full text-xs text-left dark:text-gray-400">
            <thead className="text-xs uppercase bg-transparent dark:text-gray-400">
              <tr className="text-neutral-900">
                <th scope="col" className="px-6 py-3">
                  codigo
                </th>
                <th scope="col" className="px-6 py-3">
                  nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  descripcion
                </th>
                <th scope="col" className="px-6 py-3">
                  cantidad
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-transparent border-2 border-neutral-300 text-neutral-900 hover:bg-neutral-300 ">
                <td scope="row" className="px-6 py-4">
                  XNSDJ1046M
                </td>
                <td scope="row" className="px-6 py-4 ">
                  Kit Taladro"
                </td>
                <td scope="row" className="px-6 py-4">
                  Taladro Rotomartillo Percutor Inalambrico 1/2" 2*2.0ah 69pz
                </td>
                <td scope="row" className="px-6 py-4 text-center">
                  13
                </td>
                <td scope="row" className="px-6 py-4 text-right">
                  <a href="#" className="font-medium hover:text-neutral-500">
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-transparent border-2 border-neutral-300 text-neutral-900 hover:bg-neutral-300 ">
                <td scope="row" className="px-6 py-4">
                  ZADFIVMRT0
                </td>
                <td scope="row" className="px-6 py-4">
                  Desarmador punta
                </td>
                <td scope="row" className="px-6 py-4">
                  Desarmador punta intercambiable
                </td>
                <td scope="row" className="px-6 py-4 text-center">
                  20
                </td>
                <td scope="row" className="px-6 py-4 text-right">
                  <a href="#" className="font-medium hover:text-neutral-500">
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-transparent border-2 border-neutral-300 text-neutral-900 hover:bg-neutral-300 ">
                <td scope="row" className="px-6 py-4">
                  TRSXY56H8L
                </td>
                <td scope="row" className="px-6 py-4 ">
                  Tornillo 1/2"
                </td>
                <td scope="row" className="px-6 py-4">
                  Pack 6 tornillos de 1/2"
                </td>
                <td scope="row" className="px-6 py-4 text-center">
                  40
                </td>
                <td scope="row" className="px-6 py-4 text-right">
                  <a href="#" className="font-medium hover:text-neutral-500">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
