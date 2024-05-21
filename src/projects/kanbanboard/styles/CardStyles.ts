import styled from 'styled-components';

interface StyledBadgeProps {
  color: {
    bg: string;
    text: string;
  };
}

interface StyledTagProps {
  color: string;
}

export const StyledCard = styled.div`
  display: flex;
  width: 100%;
  height: 148px;
  padding: 14px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #dee0e8;
  background: #fff;
  box-shadow: 0px 4px 14.3px 0px rgba(0, 0, 0, 0.05);

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .profile-stack {
    display: flex;
    flex-grow: 1;
    align-items: end;

    .profile-img {
      &:first-child {
        margin-left: 0;
      }
      margin-left: -7px;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      border-radius: 24px;
      border: 1px solid #fff;
    }
  }
`;

export const StyledBadge = styled.div<StyledBadgeProps>`
  display: flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: ${(props) => props.color.bg};
  color: ${(props) => props.color.text};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;

export const StyledTag = styled.span<StyledTagProps>`
  color: ${(props) => props.color};
  font-family: Roboto;
  font-size: 12px;
  line-height: normal;
`;
