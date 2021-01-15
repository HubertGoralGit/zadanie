import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  addItem as addItemAction,
  addChildItem as addChildItemAction,
} from '../../actions/index';

const ModalWrapper = styled.div`
  width: 500px;
  height: 200px;
  border-radius: 12px;
  background-color: white;
  position: fixed;
  top: calc(50% - 200px);
  left: calc(50% - 250px);
  z-index: 100;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  form {
    align-self: flex-start;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;

      label {
        font-size: 14px;
        margin-right: 5px;
      }

      input {
        height: 30px;
        padding: 0 5px;
        border-radius: 5px;
        outline: none;
        margin-right: 5px;
      }
    }

    button {
      margin-top: 20px;
    }
  }
`;

const ExitButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const Modal = ({
  addItem,
  addChildItem,
  showModal,
  setShowModal,
  childModal,
  id,
}) => {
  const [form, setForm] = useState({ name: '', hasChild: false });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (form.name !== '') {
      setShowModal((prev) => !prev);
      addItem(form);
      form.name = '';
    }
  };

  const handleChildFormSubmit = (e) => {
    e.preventDefault();
    if (form.name !== '') {
      setShowModal((prev) => !prev);
      addChildItem(id, form);
      form.name = '';
    }
  };

  return (
    <>
      {showModal && (
        <ModalWrapper>
          <h2>Add new item</h2>
          {childModal ? (
            <form>
              <div>
                <label>Item name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <button type="submit" onClick={handleChildFormSubmit}>
                Submit
              </button>
            </form>
          ) : (
            <form>
              <div>
                <label>Item name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <label>Item with childs:</label>
                <input
                  type="checkbox"
                  onClick={(e) => {
                    !e.target.checked
                      ? setForm({ ...form, hasChild: false })
                      : setForm({ ...form, hasChild: true });
                  }}
                />
              </div>
              <button type="submit" onClick={handleFormSubmit}>
                Submit
              </button>
            </form>
          )}

          <ExitButton onClick={() => setShowModal((prev) => !prev)}>
            x
          </ExitButton>
        </ModalWrapper>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
  addChildItem: (itemId, itemContent) =>
    dispatch(addChildItemAction(itemId, itemContent)),
});

export default connect(null, mapDispatchToProps)(Modal);
