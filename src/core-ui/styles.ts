import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
`;

export const AuthContainer = styled.div`
  width: 65%;
  height: 100vh;
  padding: 4% 1rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  overflow: hidden;
  text-align: center;
  @media (max-width: 876px) {
    width: 100%;
  }

  & .aside-container {
    height: calc(100vh - 16%);
    padding: 10% 1rem;
  }

  & h2 {
    margin-bottom: 10px;
  }

  & .aside-child {
    width: 400px;
    margin-top: 3rem;
    @media (max-width: 400px) {
      width: 350px;
    }
  }

  & form {
    text-align: left;
  }

  & .bottom-center {
    text-align: center;
    margin-top: 3rem !important;

    a {
      display: inline-block;
      padding: 0.8rem;
      background: #f2f2f2;
      border-radius: 4px;
      margin-right: 1rem;
      margin-top: 1rem;

      &:hover {
        background: #f1f1f1;
      }
      & i {
        color: #aaa;
        font-size: 1.2rem;
      }
    }
  }

  & .flex-box {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }
`;

export const SideBanner = styled.div`
  width: 35%;
  min-height: 100vh;
  background: #002d5c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  position: relative;
  padding-top: 6rem;

  & .fixed {
    width: 100%;
    display: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
  }

  & h1 {
    color: #fff;
    width: 20rem;
    font-size: 2.56rem;
    margin-top: 2.19rem;
    margin-bottom: 1.39rem;
  }

  & ul {
    color: #f1f1f1;
    width: 20rem;
    font-size: 0.96rem;
    & li {
      margin-bottom: 0.853rem;
      line-height: 1.493rem;
    }
  }

  @media (max-width: 876px) {
    display: none;
  }
`;

export const InnerWrapper = styled.div`
  z-index: 10;
  position: relative;

  & img.side-logo {
    z-index: 10;
    height: 2.4rem;
  }
`;
