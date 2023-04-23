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
    <NavLink to={`/stream/${id}`}>
      {tokenName}
    </NavLink>
  );
};

export default StreamLink;