import styled from 'styled-components';

interface IconProps {
  fill?: string;
  deleteCount?: number;
}

export default function TrashcanIcon({ fill, deleteCount }: IconProps) {
  const isDeleteMode = deleteCount === undefined ? false : true;

  return (
    <StyledTrashcanIcon
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      {isDeleteMode ? (
        <>
          <path
            d="M27 6H22.5V4.5C22.5 3.57174 22.1313 2.6815 21.4749 2.02513C20.8185 1.36875 19.9283 1 19 1H13C12.0717 1 11.1815 1.36875 10.5251 2.02513C9.86875 2.6815 9.5 3.57174 9.5 4.5V6H5C4.60218 6 4.22064 6.15803 3.93934 6.43934C3.65804 6.72064 3.5 7.10218 3.5 7.5C3.5 7.89782 3.65804 8.27936 3.93934 8.56066C4.22064 8.84197 4.60218 9 5 9H5.5V26C5.5 26.663 5.76339 27.2989 6.23223 27.7678C6.70107 28.2366 7.33696 28.5 8 28.5H24C24.663 28.5 25.2989 28.2366 25.7678 27.7678C26.2366 27.2989 26.5 26.663 26.5 26V9H27C27.3978 9 27.7794 8.84197 28.0607 8.56066C28.342 8.27936 28.5 7.89782 28.5 7.5C28.5 7.10218 28.342 6.72064 28.0607 6.43934C27.7794 6.15803 27.3978 6 27 6ZM12.5 4.5C12.5 4.36739 12.5527 4.24021 12.6464 4.14645C12.7402 4.05268 12.8674 4 13 4H19C19.1326 4 19.2598 4.05268 19.3536 4.14645C19.4473 4.24021 19.5 4.36739 19.5 4.5V6H12.5V4.5ZM23.5 25.5H8.5V9H23.5V25.5Z"
            fill="#E9000A"
          />
          <span>{deleteCount}</span>
        </>
      ) : (
        <path
          d="M27 6H22.5V4.5C22.5 3.57174 22.1313 2.6815 21.4749 2.02513C20.8185 1.36875 19.9283 1 19 1H13C12.0717 1 11.1815 1.36875 10.5251 2.02513C9.86875 2.6815 9.5 3.57174 9.5 4.5V6H5C4.60218 6 4.22064 6.15803 3.93934 6.43934C3.65804 6.72064 3.5 7.10218 3.5 7.5C3.5 7.89782 3.65804 8.27936 3.93934 8.56066C4.22064 8.84197 4.60218 9 5 9H5.5V26C5.5 26.663 5.76339 27.2989 6.23223 27.7678C6.70107 28.2366 7.33696 28.5 8 28.5H24C24.663 28.5 25.2989 28.2366 25.7678 27.7678C26.2366 27.2989 26.5 26.663 26.5 26V9H27C27.3978 9 27.7794 8.84197 28.0607 8.56066C28.342 8.27936 28.5 7.89782 28.5 7.5C28.5 7.10218 28.342 6.72064 28.0607 6.43934C27.7794 6.15803 27.3978 6 27 6ZM12.5 4.5C12.5 4.36739 12.5527 4.24021 12.6464 4.14645C12.7402 4.05268 12.8674 4 13 4H19C19.1326 4 19.2598 4.05268 19.3536 4.14645C19.4473 4.24021 19.5 4.36739 19.5 4.5V6H12.5V4.5ZM23.5 25.5H8.5V9H23.5V25.5ZM14.5 13V21C14.5 21.3978 14.342 21.7794 14.0607 22.0607C13.7794 22.342 13.3978 22.5 13 22.5C12.6022 22.5 12.2206 22.342 11.9393 22.0607C11.658 21.7794 11.5 21.3978 11.5 21V13C11.5 12.6022 11.658 12.2206 11.9393 11.9393C12.2206 11.658 12.6022 11.5 13 11.5C13.3978 11.5 13.7794 11.658 14.0607 11.9393C14.342 12.2206 14.5 12.6022 14.5 13ZM20.5 13V21C20.5 21.3978 20.342 21.7794 20.0607 22.0607C19.7794 22.342 19.3978 22.5 19 22.5C18.6022 22.5 18.2206 22.342 17.9393 22.0607C17.658 21.7794 17.5 21.3978 17.5 21V13C17.5 12.6022 17.658 12.2206 17.9393 11.9393C18.2206 11.658 18.6022 11.5 19 11.5C19.3978 11.5 19.7794 11.658 20.0607 11.9393C20.342 12.2206 20.5 12.6022 20.5 13Z"
          fill={fill || '#A0A0A0'}
        />
      )}
    </StyledTrashcanIcon>
  );
}

const StyledTrashcanIcon = styled.svg`
  position: relative;

  span {
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;
    color: #e9000a;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 900;
  }
`;
