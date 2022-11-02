import styled from 'styled-components';

const CommonStyled = {
  Container: styled.div`
    .header {
      background: #fff;
      padding: 0 15px;
      height: 60px;
      display: flex;
      justify-content: flex-end;
      .userInfo {
        display: flex;
        align-items: center;
        .ant-avatar {
          border-radius: 50%;
          background: #f2f2f2;
        }
        .username {
          cursor: pointer;
          display: inline-block;
          margin-left: 10px;
          margin-right: 10px;
          color: #000a12;
          font-weight: bold;
        }
      }
    }
    .menu {
      background-color: #162329;
      min-height: 100vh;
      .logo {
        background-color: #e21e00;
        height: 60px;
        padding: 0 8px 0 24px;
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        img {
          height: 32px;
        }
      }
      .ant-menu {
        background: transparent;
        border: 0;
        li {
          margin: 0;
          width: 100%;
          border-bottom: 1px solid #212e35;
        }
        .ant-menu-submenu {
          ul {
            background: #0c181d;
            li {
              background: transparent !important;
              &:after {
                display: none;
              }
              &:last-child {
                border-bottom: 0px solid #212e35;
              }
            }
          }
        }
        .ant-menu-item,
        .ant-menu-submenu {
          .ant-menu-submenu-title > span {
            display: flex;
            align-items: center;
          }
          a,
          .ant-menu-submenu-title {
            color: #828282;
            margin: 0;
            display: flex;
            align-items: center;
            .rd-icon {
              margin-right: 10px;
            }
            &:hover {
              .ant-menu-submenu-arrow {
                &:after,
                &:before {
                  background: #f2f2f2 !important;
                }
              }
            }
          }
          &.ant-menu-item-selected {
            background: #27343b;
            &:after {
              border-right: 6px solid #fb2606;
              left: 0;
              right: auto;
            }
          }
          &.ant-menu-item-selected,
          &.ant-menu-item-active {
            a,
            .ant-menu-submenu-title {
              color: #f2f2f2;
            }
          }
          &.ant-menu-submenu-open {
            position: relative;
            &:after {
              content: '';
              position: absolute;
              top: 0;
              height: 40px;
              border-right: 6px solid #fb2606;
              left: 0;
              right: auto;
            }
          }
          &.ant-menu-submenu-open,
          &.ant-menu-submenu-active {
            background: #27343b;
            .ant-menu-submenu-title {
              color: #f2f2f2;
              .ant-menu-submenu-arrow {
                &:after,
                &:before {
                  background: #f2f2f2 !important;
                }
              }
            }
          }
        }
      }
    }
    .content {
      background: #e8e8e8;
      .contentPage {
        padding: 30px;
        .entryHeader {
          .ant-row {
            display: flex;
            align-items: center;
          }
          .d-flex {
            display: flex;
            justify-content: flex-end;
            .tmp-btn {
              margin-left: 5px;
              button {
                color: #d0021b;
                border-color: #d0021b;
              }
              button[disabled] {
                color: rgba(0, 0, 0, 0.25);
                border-color: #d9d9d9;
              }
            }
          }
        }
      }
      .page-title {
        font-size: 30px;
        padding: 15px 0;
        h3 {
          margin-bottom: 0;
        }
      }
      .content-layout {
        padding: 15px;
        margin: 0;
        min-height: 280px;
      }
    }

    .tmp-title-page-size30 {
      margin: 0;
      font-size: 30px;
    }
    img {
      max-width: 100%;
    }
    .row {
      margin-left: -5px;
      margin-right: -5px;
      > .ant-col {
        padding-left: 5px;
        padding-right: 5px;
      }
    }
    .d-flex-align-center {
      display: flex;
      align-items: center;
    }
  `,
};
export default CommonStyled;
