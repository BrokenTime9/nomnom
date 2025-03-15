import { Input } from "@/components/input";
import { useState } from "react";
import { setVal } from "@/logic/local/callbacks/setter";

const AddRecipe = () => {
  const [title, setTitle] = useState<string>("");
  // use zustand

  return (
    <Input
      name={"title"}
      placeholder={"Title"}
      value={title}
      callback={setVal(title, setTitle)}
    />
  );
};

export default AddRecipe;
