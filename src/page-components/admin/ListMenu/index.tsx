import React, { FC } from "react";
import cn from "classnames";
import { Button } from "src/components/Button";
import { Loader } from "src/components/Loader";
import { useDeleteMenuItemMutation, useGetMenuQuery } from "src/store/menu";
import { getImageUrl } from "src/utils/getImageUrl";
import { NotificationService } from "src/helpers/notifications";
import { IMenuItem } from "src/@types/menu-item";
import { Sizes } from "src/@types/sizes";

interface Props {
  className?: string;
  handleEditItem: (item: IMenuItem) => void;
  onDelete: VoidFunction;
}

export const ListMenu: FC<Props> = ({
  className,
  handleEditItem,
  onDelete,
}) => {
  const { data: menu, isFetching: isLoadingMenu } = useGetMenuQuery();

  const [deleteMenuItem, { isLoading: isLoadingDelete }] =
    useDeleteMenuItemMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteMenuItem(id).unwrap();
      NotificationService.success("Успішно видалено!");

      onDelete();
    } catch {
      NotificationService.error("Помилка видалення");
    }
  };

  const handleEdit = (editItem: IMenuItem) => {
    handleEditItem(editItem);
  };

  return (
    <div className={cn("rounded-2xl border bg-white-base", className)}>
      {isLoadingMenu && (
        <div className="p-5">
          <Loader size={Sizes.M} />
        </div>
      )}

      <ul className="grid grid-cols-1">
        {menu && !isLoadingMenu && (
          <>
            <li className="hidden gap-4 rounded-t-2xl border-b bg-gray-50 p-5 font-semibold text-gray-700 sm:grid sm:grid-cols-[80px_2fr_2fr_4fr_auto_1fr]">
              <div>Фото</div>
              <div>Вага</div>
              <div>Назва</div>
              <div>Опис</div>
              <div>Ціна</div>
              <div className="text-right">Керування</div>
            </li>

            {menu.map(({ _id, name, price, weight, description, image }) => (
              <li
                key={_id}
                className="flex flex-col gap-4 border-b p-5 last:border-none sm:grid sm:grid-cols-[80px_2fr_2fr_4fr_auto_1fr] sm:items-center"
              >
                <div className="flex items-center justify-between">
                  <div className="h-20 w-20">
                    <img
                      className="h-full w-full rounded-xl object-cover"
                      src={getImageUrl(image)}
                      alt={name}
                    />
                  </div>

                  <span className="font-bold text-gray-700 sm:hidden">
                    Фото
                  </span>
                </div>

                <div className="flex items-center justify-between gap-10">
                  {weight ? (
                    <span>{weight}г</span>
                  ) : (
                    <span className="rounded-lg bg-red-500 px-0.5 text-white-base text-center">
                      не вказано
                    </span>
                  )}
                  <span className="font-bold text-gray-700 sm:hidden">
                    Вага
                  </span>
                </div>

                <div className="flex items-center justify-between gap-10">
                  {name ? (
                    <span>{name}</span>
                  ) : (
                    <span className="rounded-lg bg-red-500 px-0.5 text-white-base text-center">
                      не вказано
                    </span>
                  )}
                  <span className="font-bold text-gray-700 sm:hidden">
                    Назва
                  </span>
                </div>

                <div className="flex items-center justify-between gap-10">
                  {description ? (
                    <span>{description}</span>
                  ) : (
                    <span className="rounded-lg bg-red-500 px-0.5 text-white-base text-center">
                      не вказано
                    </span>
                  )}
                  <span className="font-bold text-gray-700 sm:hidden">
                    Опис
                  </span>
                </div>

                <div className="flex items-center justify-between gap-10">
                  {price ? (
                    <span>{price}&#8372;</span>
                  ) : (
                    <span className="rounded-lg bg-red-500 px-0.5 text-white-base text-center">
                      не вказано
                    </span>
                  )}
                  <span className="font-bold text-gray-700 sm:hidden">
                    Ціна
                  </span>
                </div>

                <div className="flex items-center justify-between gap-10">
                  <div className="flex items-center justify-end gap-3">
                    <Button
                      onClick={() =>
                        handleEdit({
                          _id,
                          name,
                          price,
                          weight,
                          description,
                          image,
                        })
                      }
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

                  <span className="font-bold text-gray-700 sm:hidden">
                    Керування
                  </span>
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
