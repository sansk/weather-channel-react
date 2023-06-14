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
    justify-content: center;
    align-items: center;
  }

  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    width: 90%
  }

  .form-input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius) 0 0 var(--borderRadius);
    background: var(--clr-white);
    border: 1px solid var(clr-grey-4);
    font-size: 1rem;
    letter-spacing: var(--spacing);
    outline: none;
  }

  .form-input:focus {
    border: 1px solid var(--clr-primary-4);
    outline: none;
  }

  .btn {
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
    font-weight: 400;
    transition: var(--transition);
    font-size: 2rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0 var(--radius) var(--radius) 0;
    border: 1px solid var(--clr-primary-5);
    padding: 0.3rem;
  }

  .btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-7);
  }

  .btn svg {
    display: block;
    margin: auto;
  }

  @media screen and (min-width: 740px) {
    .form {
      width: 70%
    }
  }

  @media screen and (min-width: 920px) {
    .form {
      width: 60%
    }
  }
`;