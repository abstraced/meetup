import React from 'react';
import { shallow } from 'enzyme';
import EventNumber from '../EventNumber';




describe('<EventNumber /> component', () => {
    let EventNumberWrapper ;
    beforeAll(() => {
        EventNumberWrapper  = shallow(<EventNumber />);
    });

    test('render textbox element', () => {
      expect(EventNumberWrapper.find('.event_number')).toHaveLength(1);
    });
    
    test('show number of events  label', () => {
      expect(EventNumberWrapper.find('.event_number label')).toHaveLength(1);
    });


    test('render text input', () => {
        expect(EventNumberWrapper .find('.event_number')).toHaveLength(1);
      });


      test('change state when text input changes', () => {
        const eventObject = { target: { value: 30 }};
        EventNumberWrapper .find('.event_number_input').simulate('change', eventObject);
        expect(EventNumberWrapper .state('numberOfEvents')).toBe(30);
      });

   
      
});