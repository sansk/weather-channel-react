import styled from 'styled-components';

export const Wrapper = styled.div`
  backdrop-filter: blur(25px) saturate(100%);
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);

  margin-bottom: 2rem;

  .section {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    line-height: none;
  }

  .location {
    display: flex;
    align-items: stretch;
  }

  .time {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
  
  @media screen and (min-width: 920px) {
    .location-container {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

`;