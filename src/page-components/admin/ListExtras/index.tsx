import React, { FC } from "react";
import cn from "classnames";
import { Button } from "src/components/Button";
import { Loader } from "src/components/Loader";
import { useDeleteExtraMutation, useGetExtrasQuery } from "src/store/extras";
import { NotificationService } from "src/helpers/notifications";
import { Sizes } from "src/@types/sizes";

interface Props {
  className?: string;
  // handleEditItem: (item: IMenuItem) => void;
  // onDelete: VoidFunction;
}

export const ListExtras: FC<Props> = ({
  className,
  // handleEditItem,
  // onDelete,
}) => {
  const { data: extras, isFetching: isLoadingExtras } = useGetExtrasQuery();

  const [deleteMenuItem, { isLoading: isLoadingDelete }] =
    useDeleteExtraMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteMenuItem(id).unwrap();
      NotificationService.success("Успішно видалено!");

      // onDelete();
    } catch {
      NotificationService.error("Помилка видалення");
    }
  };

  // const handleEdit = (editItem: IMenuItem) => {
  //   handleEditItem(editItem);
  // };

  return (
    <div className={cn("rounded-2xl border bg-white-base", className)}>
      {isLoadingExtras && (
        <div className="p-5">
          <Loader size={Sizes.M} />
        </div>
      )}

      <ul className="grid grid-cols-1">
        {extras && !isLoadingExtras && (
          <>
            <li className="grid grid-cols-3 gap-4 rounded-t-2xl border-b bg-gray-50 p-5 font-semibold text-gray-700">
              <div>Назва</div>
              <div>Ціна</div>
              <div className="text-right">Керування</div>
            </li>

            {extras.map(({ _id, name, price }) => (
              <li
                key={_id}
                className="grid grid-cols-3 flex-col items-center gap-4 border-b p-5 last:border-none"
              >
                <span>{name}</span>
                <span>{price}&#8372;</span>

                <div className="flex items-center justify-end gap-3">
                  <Button
                  // onClick={() =>
                  //   handleEdit({
                  //     _id,
                  //     name,
                  //     price,
                  //     weight,
                  //     description,
                  //     image,
                  //   })
                  // }
                  >
                    ✏️
                  </Button>

                  <Button
                    onClick={() => handleDelete(_id)}
                    isDisabled={isLoadingDelete}
                  >
                    ❌
                  </Button>
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
