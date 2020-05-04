import styled from 'styled-components';
import React from 'react';
import Link, {LinkProps} from 'next/link';
import {useRouter} from 'next/router';

import {reset} from '../../styles/utils';

type Props = {
  external?: boolean;
  href?: string;
  as?: string;
  children?: React.ReactNode;
  onClick?: () => void;
} & Partial<LinkProps>;

const StyledA = styled.a<{current?: boolean}>`
  cursor: ${({href, current}) => (current || !href ? 'default' : 'pointer')};
  color: ${props => props.theme.primaryColor};
  text-decoration: underline;

  &:hover {
    text-decoration: ${({current, href}) =>
      current || !href ? 'underline' : 'none'};
  }
`;

const StyledButton = styled.button<{current?: boolean}>`
  ${reset};
  background: none;
  color: white;
  background: ${props => props.theme.primaryColor};
  padding: ${props => props.theme.emSizes[1]} ${props => props.theme.emSizes[2]};
  display: block;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.6;
  border: 1px solid;
  border-radius: 1px;
  cursor: pointer;
`;

function A({external, as, href, onClick, children}: Props) {
  const router = useRouter();
  const current = router.asPath === href;

  if (onClick) {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
  }

  if (!href) {
    return <StyledA as="span">{children}</StyledA>;
  }

  if (external) {
    return (
      <StyledA href={href} target="_blank">
        {children}
      </StyledA>
    );
  }

  return (
    <Link as={as} href={href}>
      <StyledA current={current} href={href}>
        {children}
      </StyledA>
    </Link>
  );
}

export default A;
