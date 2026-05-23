"use client"
import { ListBox, Select } from "@heroui/react";
import { Label } from "@heroui/react";
import { useRouter } from "next/navigation";

const Filter = () => {

  const router = useRouter();

  const onChange = (e) => {

    const value = e.target.value;

    router.push(
      value
        ? `http://localhost:3000/all-pets?search=${value}`
        : `http://localhost:3000/all-pets`
    );
  };

  return (
    <div>

      <div className="bg-[#fafbfe] shadow-2xl rounded p-5 border">

        <input
          type="text"
          name="search"
          placeholder="search your pet"
          onChange={onChange}
          
          className="bg-[#fefefe] border rounded border-[#f0f2f6]"
        />

        <div>
                      <Select
                        name="Species"
                        isRequired
                        className="w-full"
                        placeholder="Select Gender"
                        onChange={onChange}
                        >
                        <Label>Species</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="dog" textValue="dog">
                              Dog
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="cat" textValue="cat">
                              Cat
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="turtule" textValue="turtule">
                              Turtle
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                          </div>
    </div>
  );
};

export default Filter;