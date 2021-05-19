import styled from 'styled-components'

export const StyleTable = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  .body-table {
    padding: 21px 21px;

    table tbody {
      td {
        height: auto;
        font-size: 13.5px;
      }
      tr:nth-of-type(odd) > td[colSpan='20'] {
        background-color: #ffff;
      }
      td[colSpan='20'] {
        padding-top: 40px;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #646981;
      }
    }
  }

  .filter-options {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .option-left {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        margin: 0;
        li {
          button {
            cursor: pointer;
            border: none;
            margin-right: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 1.73rem;
            min-width: 1.7rem;
            padding: 0.5rem;
            transition: color 0.15s ease, background-color 0.15s ease,
              border-color 0.15s ease, box-shadow 0.15s ease;
            position: 0.35rem;
            font-size: 0.83rem;
            line-height: 1rem;
            font-weight: 500;
            border-radius: 0.42rem;
            color: #7e8299;
            svg * {
              stroke: #7e8299 !important;
              color: #7e8299 !important;
            }
            &:not(.option-pager) {
              background-color: rgb(242 242 242);
            }
            &.option-pager {
              background-color: #ffffff;
            }
            &.active,
            &:active,
            &:hover {
              transition: color 0.15s ease, background-color 0.15s ease,
                border-color 0.15s ease, box-shadow 0.15s ease,
                -webkit-box-shadow 0.15s ease;
              background-color: #0d71f0;
              color: #ffffff;
              svg * {
                transition: all 0s;
                stroke: #ffffff !important;
                color: #ffffff !important;
              }
            }
            &.disabled {
              pointer-events: none;
              background: #a0a4b357;
              opacity: 0.4;
              transition: all 0.3s;
              &:hover {
                transform: scale(1);
                transition: all 0.3s;
              }
            }
          }
        }
      }
    }
    .option-right {
      display: flex;
      align-items: center;
      .info {
        margin-left: 15px;
        span {
          font-family: 'Inter';
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 23px;
          text-align: center;
          color: rgba(100, 105, 129, 0.7);
          margin-bottom: 0;
        }
      }
      .dropdown {
        width: auto;
        button {
          background-color: rgb(242 242 242);
          border-color: rgb(242 242 242);
          color: rgba(100, 105, 129, 0.7);
          padding: 0.2rem 0.75rem;
          font-size: 0.83rem;
          font-family: 'Inter';
          &::after {
            margin-left: 0.385em;
          }
          &:hover,
          &:focus,
          &:active {
            background-color: #0d71f0;
            border-color: #0d71f0;
            color: #ffffff;
            box-shadow: unset;
          }
        }
        .dropdown-menu {
          border: none;
        }
        .dropdown-menu {
          width: 3.35rem;
          min-width: 3.35rem;
          transform: translate(0px, -29px);
          a {
            font-size: 0.83rem;
            text-align: center;
            padding: 0.2rem 0rem 0.2rem 0rem;
            width: 100%;
            color: #7e8299;
            font-family: 'Inter';
            &.active,
            &:focus,
            &:hover,
            &:active {
              background-color: #f2f2f2 !important;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .body-table {
      table {
        thead {
          th {
            padding: 1rem 0.5rem 0.75rem 0.4rem;
            span {
              margin-right: 0.8px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 823px), (width: 540px) {
    .filter-options {
      margin-top: 5px;
      display: grid;
      justify-content: center;
      align-items: center;
      .option-left {
        margin-bottom: 20px;
      }
      .option-right {
        justify-content: center;
      }
    }
  }
  @media (max-width: 375px) {
    .filter-options {
      display: grid;
      justify-content: center;
      align-items: center;
      .option-left {
        margin-bottom: 20px;
        ul {
          li {
            button {
              margin-right: 4px;
              min-width: 1.7rem;
              padding: 0.2rem;
              font-size: 0.65rem;
            }
          }
        }
      }
      .option-right {
        justify-content: center;
        .info {
          span {
          }
        }
        .dropdown {
          button {
            padding: 0.15rem 0.7rem;
          }
        }
      }
    }
  }
  @media (max-width: 320px) {
    .filter-options {
      .option-right {
        display: grid;
        justify-content: center;
        justify-items: center;
        .info {
          margin-bottom: 10px;
        }
      }
    }
  }
`
export const StyledInputSearch = styled.div`
  label {
    width: 270px;
    height: 40px;
    border: 1px solid #ced4da;
    padding-left: 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      margin-right: 15px;
    }
    input[type='text'] {
      -moz-appearance: none;
      appearance: none;
      border: none;
      width: 80%;
      height: 100%;
      padding: 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 18px;
      color: #8b8f9d;
    }
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
`
