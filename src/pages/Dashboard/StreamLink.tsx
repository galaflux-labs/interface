import { FC } from 'react';
import { NavLink } from "react-router-dom";

interface StreamLinkProps {
  id: string
  tokenName: string
}

const StreamLink: FC<StreamLinkProps> = ({
  id,
  tokenName
}) => {
  return (
    <NavLink className="p-4" to={`/stream/${id}`}>
      {tokenName}
    </NavLink>
  );
};

export default StreamLink;