import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FormName from '../FormName/FormName';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import PlusIcon from '../../assets/icons/plus.svg';
import MinusIcon from '../../assets/icons/minus.svg';
import CategoryWrapper from '../Category/Category';
import Modal from '../Modal/Modal';
import { removeItem as removeItemAction, removeChildItem as removeChildItemAction } from '../../actions/index';

const StyledWrapper = styled.div`
  width: 600px;
  padding: 50px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;

  :after {
    content: '';
    position: absolute;
    height: calc(100% - 195px);
    top: 100px;
    left: 150px;
    width: 2px;
    background-color: #c9cdd7;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  left: 128px;
  bottom: 50px;
`;

const ListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-self: flex-end;
  margin: 50px 0;
`;

const CategoryName = styled.p`
  font-weight: bold;
`;

const CategoryItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.child-wrapper {
    border: 1px solid #c9cdd7;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 80%;
    padding: 5px 10px;
    align-self: flex-end;
    margin-bottom: 10px;
    position: relative;

    :last-of-type {
      margin-bottom: 20px;
    }

    :before {
      content: '';
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: #c9cdd7;
      left: -30px;
      top: calc(50% - 1px);
    }
  }

  .absolute-child-text {
    position: absolute;
    left: -55px;
    top: calc(50% - 9px);
    color: #c9cdd7;
  }

  button {
    width: 25px;
    height: 25px;
  }
`;

const CategoryChildsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = ({ items, removeItem, removeChildItem }) => {
  const [showModal, setShowModal] = useState(false);
  const [withChild, setWithChild] = useState(false);
  const [activeId, setActiveId] = useState('');

  const openModal = () => {
    setShowModal((prev) => !prev);
    setWithChild(false);
  };

  const openChildModal = () => {
    setShowModal((prev) => !prev);
    setWithChild(true);
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        childModal={withChild}
        id={activeId}
      />
      <StyledWrapper>
        <FormName>People</FormName>
        <ListsWrapper>
          {items.map((item, i) => {
            return (
              <CategoryWrapper
                key={i}
                className={item.hasChild && 'with-childs'}
              >
                <div className="category-wrapper-line"></div>
                <p className="absolute-text">And</p>
                <CategoryItemWrapper
                  className={item.hasChild && 'category-main-name'}
                >
                  <CategoryName className="item-name">{item.name}</CategoryName>
                  <ButtonIcon
                    minus
                    icon={MinusIcon}
                    onClick={(e) => removeItem(item.id)}
                  />
                </CategoryItemWrapper>
                {item.hasChild && (
                  <CategoryChildsWrapper>
                    {item.childs.map((child, id) => {
                      return (
                        <CategoryItemWrapper className="child-wrapper" key={id}>
                          <p className="absolute-child-text">Or</p>
                          <CategoryName>{child.name}</CategoryName>
                          <ButtonIcon
                            minus
                            icon={MinusIcon}
                            className="childs-wrapper-button"
                            onClick={() => {console.log(removeChildItem(child.id, item.id))}}
                          />
                        </CategoryItemWrapper>
                      );
                    })}
                    <ButtonIcon
                      plus
                      icon={PlusIcon}
                      onClick={() => {
                        openChildModal();
                        setActiveId(item.id);
                      }}
                    />
                  </CategoryChildsWrapper>
                )}
              </CategoryWrapper>
            );
          })}
        </ListsWrapper>
        <StyledButtonIcon icon={PlusIcon} plus onClick={openModal} />
      </StyledWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  const { items } = state;
  return { items };
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  removeChildItem: (id, itemId) => dispatch(removeChildItemAction(id, itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
