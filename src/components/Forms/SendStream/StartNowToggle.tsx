import React, { useEffect, useState } from 'react';
import { useFormContext } from "react-hook-form";
import { Label } from "../Common";
import { Switch } from "@headlessui/react";

const StartNowToggle: React.FC = () => {

  const {setValue} = useFormContext<{ startDate: string }>()
  const [enabled, setEnabled] = useState(false)


  useEffect(() => {
    if (enabled) {
      setValue("startDate", new Date().toLocaleDateString("en-CA"))
    } else {
        setValue("startDate", "")
    }
  }, [enabled])

  return (
    <div>
      <Label label="Start date: now" />
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-orange-300" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Start now</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};

export default StartNowToggle