import React from "react";
import { toast } from "sonner";

const CreateCollection = () => {
  const createCollection = async () => {
    const res = new Promise((resolve) => setTimeout(resolve, 2000));

    toast.promise(res, {
      loading: "Creating your first collection...",
      success: "Collection created!",
      error: "Something went wrong!",
    });
  };
  return (
    <button
      onClick={() => createCollection()}
      className='flex justify-center border-2 mx-auto rounded-lg border-gray-500 w-1/2 border-dotted p-6 hover:bg-slate-300'
    >
      <p className='text-2xl font-medium text-center'>
        Create your first Book Collection
      </p>
    </button>
  );
};

export default CreateCollection;
