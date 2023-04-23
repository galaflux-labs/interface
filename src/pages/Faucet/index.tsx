import { FC, useState } from 'react';
import { BaseButton } from "../../components/Buttons";

const Faucet: FC = () => {

  const [loading, setLoading] = useState(false)

  const faucet = () => {
    setLoading(true)
    // your faucet here .then(() => setLoading(false))
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[200px]">
        <BaseButton text="Faucet 100 test tokens"
                    onClick={faucet}
                    disabled={loading}
        />
      </div>
    </div>
  );
};

export default Faucet;