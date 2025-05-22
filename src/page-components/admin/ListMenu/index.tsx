import React, { FC, useState } from "react";
import cn from "classnames";
import imageTemp from "src/page-components/home/Menu/temp.jpg";
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
}

export const ListMenu: FC<Props> = ({ className, handleEditItem }) => {
  const { data: menu, isFetching: isLoadingMenu } = useGetMenuQuery();

  const [deleteMenuItem, { isLoading: isLoadingDelete }] =
    useDeleteMenuItemMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteMenuItem(id).unwrap();
      NotificationService.success("Успішно видалено!");
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
            <li className="grid grid-cols-[80px_2fr_2fr_4fr_auto_1fr] gap-4 rounded-t-2xl border-b bg-gray-50 p-5 font-semibold text-gray-700">
              <div>Фото</div>
              <div>Вага</div>
              <div>Назва</div>
              <div>Опис</div>
              <div>Ціна</div>
              <div className="text-right">Керування</div>
            </li>
            {menu.map(({ _id, name, price, weight, description, image }) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [previewSrc, setPreviewSrc] = useState<string>(
                getImageUrl(image)
              );

              const handleError = () => {
                setPreviewSrc(imageTemp);
              };

              return (
                <li
                  key={_id}
                  className="grid grid-cols-[80px_2fr_2fr_4fr_auto_1fr] items-center gap-4 border-b p-5 last:border-none"
                >
                  <div className="h-20 w-20">
                    <img
                      className="h-full w-full rounded-xl object-cover"
                      src={previewSrc}
                      alt={name}
                      onError={handleError}
                    />
                  </div>
                  <div>{weight}г</div>
                  <div>{name}</div>
                  <div>{description}</div>
                  <div>{price}&#8372;</div>

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
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};
