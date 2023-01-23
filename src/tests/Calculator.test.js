import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add numbers', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const operatorAdd = container.getByTestId('operator-add');
    fireEvent.click(operatorAdd);
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4);
    const equal = container.getByTestId('operator-equals')
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to substract', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const operatorSubstract = container.getByTestId("operator-subtract");
    fireEvent.click(operatorSubstract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equal = container.getByTestId('operator-equals')
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const operatorMultiply = container.getByTestId("operator-multiply");
    fireEvent.click(operatorMultiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equal = container.getByTestId('operator-equals')
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15')
  })

  it('it should be able fo divide', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const operatorDivide = container.getByTestId("operator-divide");
    fireEvent.click(operatorDivide);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equal = container.getByTestId('operator-equals')
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3')
  })

  it('it should be able to show the number clicked', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('21')
  })

  it('it should be able to concadenate multiple operations together on clicks', () => {
    const button8 = container.getByTestId('number8');  
    fireEvent.click(button8);
    const operatorAdd = container.getByTestId('operator-add');
    fireEvent.click(operatorAdd);
    const button4 = container.getByTestId('number4'); 
    fireEvent.click(button4);
    const operatorSubstract = container.getByTestId("operator-subtract");
    fireEvent.click(operatorSubstract);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const equal = container.getByTestId('operator-equals')
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('10')
  })
    
  it('it should be able to clear all previous numbers on click', () => {
    const button8 = container.getByTestId('number8');  
    fireEvent.click(button8);
    const operatorAdd = container.getByTestId('operator-add');
    fireEvent.click(operatorAdd);
    const button4 = container.getByTestId('number4'); 
    fireEvent.click(button4);
    const clearAll = container.getByTestId('clear');
    fireEvent.click(clearAll);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('0')

  })

})
  



