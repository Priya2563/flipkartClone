


import { Button, ButtonGroup, styled } from '@mui/material';

const Component = styled(ButtonGroup)`
margin-top: 30px;
`;

const StyledButton = styled(Button)`
border-radius:50%;
`
const GroupedButton = () => {
    return (
        <Component>
            <StyledButton>-</StyledButton>
            <button disabled>1</button>
            <StyledButton>+</StyledButton>
        </Component>
    )
}

export default GroupedButton;