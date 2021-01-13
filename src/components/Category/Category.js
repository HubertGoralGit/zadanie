import styled from 'styled-components';

const CategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 40px;

  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(to bottom, #a577f3, #7376f6);
    height: 100%;
    width: 10px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  :after {
    content: '';
    position: absolute;
    left: -100px;
    top: calc(50% - 1px);
    width: 100px;
    height: 2px;
    background-color: #c9cdd7;
  }

  .absolute-text {
    position: absolute;
    left: -150px;
    color: #c9cdd7;
    top: calc(50% - 9px);
  }

  &.with-childs {
    position: relative;
    :after {
      content: '';
      position: absolute;
      height: calc(100% - 95px);
      width: 1px;
      background-color: #c9cdd7;
      top: 40px;
      left: 42px;
    }
    .category-main-name {
      margin-bottom: 20px;
      position: relative;
    }
    div {
      .item-name {
        border: 1px solid #c9cdd7;
        width: 80%;
        padding: 5px;
        border-radius: 4px;
      }
    }
  }
`;

export default CategoryWrapper;
