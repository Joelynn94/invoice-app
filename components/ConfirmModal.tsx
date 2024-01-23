"use client";

import { Invoice } from "@/app/lib/definitions";

import Button from "./Button";

export default function ConfirmModal({
  invoice,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  onDeleteClick,
}: {
  invoice: Invoice;
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDeleteClick: () => void;
}) {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white dark:bg-secondary-500">
        <div className="w-full">
          <div className="my-10 max-w-[425px] mx-auto">
            <div className="mb-8">
              <h1 className=" text-gray-950 dark:text-gray-50 text-3xl font-extrabold mb-4">
                Confirm Deletion
              </h1>

              <div className="text-slate-400 font-medium leading-snug">
                Are you sure you want to delete invoice #{invoice._id}? This
                action cannot be undone.
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button
                variant="edit"
                onClick={() => setIsDeleteModalOpen(!setIsDeleteModalOpen)}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={() => onDeleteClick()}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
