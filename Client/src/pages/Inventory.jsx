import React from "react";
import Navbar from "../components/dashboard/Navbar";
import SearchBar from "../components/dashboard/SearchBar";
import Stock from "../components/dashboard/Stock";
import Drawer from "../components/utils/Drawer";
import CreateItem from "../components/inventory/forms/Create";
import EditItem from "../components/inventory/forms/Edit";
import ViewDetails from "../components/inventory/forms/ViewDetails";
import { CREATE, EDIT, VIEW } from "../utils/constants";
import ModalDelete from "../components/utils/modals/Delete";
import { getAllItems } from "../services/getItems";
import { createItem } from "../services/createItem";
import { removeItem } from "../services/removeItem";
import { updateItem } from "../services/updateItem";

const Inventory = () => {
  const [items, setItems] = React.useState([]);
  const [selected, setSelected] = React.useState("");
  const [remove, setRemove] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = React.useState({
    item: {},
    modalType: "",
  });

  const [searchText, setSearchText] = React.useState("");

  const handleRenderView = () => {
    switch (action.modalType) {
      case CREATE:
        return <CreateItem handleCreate={handleCreate} />;
      case EDIT:
        return (
          <EditItem item={action.item} handleEdit={handleEdit} />
        );
      case VIEW:
        return (
          <ViewDetails item={action.item} />
        )
      default:
        return null;
    }
  };

  const handleCreateVisible = () => {
    setAction({
      item: {},
      modalType: CREATE,
    });
    setOpen(true);
  }

  const handleEditVisible = (item) => {
    setAction({
      item,
      modalType: EDIT,
    });
    setOpen(true);
  }

  const handleViewVisible = (item) => {
    setAction({
      item,
      modalType: VIEW,
    });
    setOpen(true);
  }

  const handleRemoveVisible = (uuid) => {
    setSelected(uuid);
    setRemove(!remove);
  };

  const handleCreate = async (item) => {
    try {
      await createItem({
        ...item
      })
      setOpen(false)
    } catch(err) {
      console.log("Error: ", err)
    }
  }

  const handleRemove = async () => {
    try {
      await removeItem(selected)
      setRemove(false)
    } catch(err) {
      console.log("Error: ", err)
    }
  }

  const handleEdit = async (item) => {
    try {
      await updateItem({
        ...item
      })
      setOpen(false)
    } catch(err) {
      console.log("Error: ", err)
    }
  }

  React.useEffect(() => {
    getAllItems()
    .then((res) => {
      setItems(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [open, remove])


  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredSearch = React.useMemo(() => {
    return items.filter((item) =>
      item?.title.toLowerCase().includes(searchText?.toLowerCase())
    );
  }, [items, searchText]);



  return (
    <>
      <div className="grid grid-cols-4 grid-rows-[0.2fr,0.3fr,2fr] gap-1 min-h-screen bg-neutral-200">
        <Navbar />
        <SearchBar handleCreateVisible={handleCreateVisible} handleSearch={handleSearch} />
        <div className=" row-span-2">
          <div className="flex justify-end items-end h-full">
            <img
              className="h-4/6 w-4/6"
              src="../../twemoji_hammer-and-wrench.svg"
              alt="hammer and wrench"
            />
          </div>
        </div>
        <Stock
          items={filteredSearch}
          handleEditVisible={handleEditVisible}
          handleViewVisible={handleViewVisible}
          handleRemoveVisible={handleRemoveVisible}
        />
      </div>
      <Drawer
        title={
          action.modalType === CREATE
            ? "Crear Artículo"
            : action.modalType === EDIT
            ? "Editar Artículo"
            : action.modalType === VIEW
            ? "Visualizar Artículo"
            : ""
        }
        open={open}
        setOpen={setOpen}
        large={false}
      >
        {handleRenderView()}
      </Drawer>
      <ModalDelete
        title="Eliminar Item"
        description="¿Está seguro que desea eliminar este item?"
        visible={remove}
        handleVisible={() => setRemove(!remove)}
        handleDelete={handleRemove}
      />
    </>
  );
};

export default Inventory;
