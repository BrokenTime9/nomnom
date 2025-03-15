import { StateSetter } from "@/types";

const setVal = <T>(val: T, setter: StateSetter<T>) => {
  setter(val);
};

export { setVal };
