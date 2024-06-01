import styled from 'styled-components';

export const StyledColumn = styled.div`
  display: flex;
  width: 400px;
  height: fit-content;
  padding: 20px 20px 42px 20px;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  border-radius: 16px;
  background: #dee2f9;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 34px;

    .column-title {
      color: #3d4273;
      font-family: Roboto;
      font-size: 20px;
      font-weight: 500;
      line-height: normal;
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
  }
`;
