import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../Map';
import {addDays ,format } from 'date-fns';

const  coords = { lng: 40.7, lat: 25, zoom: 1.06 }; //default coordinates
const startingPoint = -300;

function toJsonString(date) {
    return format(date, 'yyyy-MM-dd');
  }

const props = {
    dark: "false",
    selectedDate: toJsonString(addDays(new Date(), startingPoint)),
    startDate: addDays(new Date(), startingPoint),
    onOpen: jest.fn(),
    daysRange: 70,
    isCountrySearchVisible: false,
    mapCord: coords,
}
window.URL = window.URL || function() {
  return {
      createObjectURL: jest.fn(),
  };
};

it('renders correctly when there are no items', () => {
    window.URL.createObjectURL = jest.fn();
    const tree = renderer.create(<Map {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });