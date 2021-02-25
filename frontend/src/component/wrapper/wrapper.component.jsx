import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOddScheckerDataAction } from '../../store/oddschecker.action';
import { TextField } from '@material-ui/core';
import { Modal } from '../modal/modal.component';
import { Button } from '../button/button.component';
import {
  Container,
  Header,
  Title,
  CardContainer,
  InnerWrapper,
  InnerContainer,
} from './wrapper.style';
import { Card } from '../card/card.component';
import Select from 'react-select';

const customStyles = {
  option: (provided) => ({
    ...provided,
    color: 'black',
    padding: 20,
  }),
  control: () => ({
    width: 200,
    display: 'flex',
    background: 'white',
  }),
};

const Wrapper = () => {
  const [mockData] = useSelector(({ oddschecker }) => [oddschecker.data]);
  const [selectValue, setSelectValue] = useState({
    label: 'More then two',
    value: 'decimalOddsMoreThanTwo',
  });
  const [total, setTotal] = useState(0);
  const [inputDict, setInputDict] = useState({});
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const dispatch = useDispatch();
  const dropdownOptions = [
    {
      label: 'More then two',
      value: 'decimalOddsMoreThanTwo',
    },
    {
      label: 'Less then two',
      value: 'decimalOddsLessThanTwo',
    },
  ];

  useEffect(() => {
    dispatch(getOddScheckerDataAction(selectValue.value));
  }, [selectValue, dispatch]);

  const handleDropdownChange = (value) => {
    setSelectValue({ label: value.label, value: value.value });
  };

  const handleButtonclick = () => {
    let total = 0;
    const betIdArray = mockData.map(({ betId }) => betId);
    betIdArray.forEach((id) => {
      if (inputDict[id] === '' || !inputDict[id]) {
        inputDict[id] = 0;
      }
      total += parseInt(inputDict[id]);
    });

    setTotal(isNaN(total) ? 0 : total);
    openModal();
  };

  const handleInputOnChange = (event, betId) => {
    const { value } = event.target;
    setInputDict((prevState) => ({ ...prevState, [betId]: value }));
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h2>Receipt</h2>
        <p>Your bet has been placed</p>
        <p>Total Stake: {total}</p>
      </Modal>
      <Container>
        <Header>
          <Title>Betslip</Title>
          <Select
            styles={customStyles}
            value={selectValue}
            onChange={handleDropdownChange}
            options={dropdownOptions}
          />
        </Header>
        <InnerWrapper>
          <InnerContainer>
            <CardContainer>
              {mockData &&
                mockData.map(({ name, odds, betId }) => {
                  const findBestOddsDecimal = Math.max.apply(
                    Math,
                    odds.map(function (odd) {
                      return odd.oddsDecimal;
                    })
                  );

                  return (
                    <Card key={betId}>
                      <div>
                        <h3>{name}</h3>
                        <p>Best odds: {findBestOddsDecimal}</p>
                      </div>
                      <TextField
                        label="Stake"
                        type="number"
                        value={inputDict[betId] || ''}
                        name={`number-${betId}`}
                        onChange={(e) => handleInputOnChange(e, betId)}
                      />
                    </Card>
                  );
                })}
            </CardContainer>
            <Button onClick={handleButtonclick}>Bet now</Button>
          </InnerContainer>
        </InnerWrapper>
      </Container>
    </>
  );
};

export { Wrapper };
