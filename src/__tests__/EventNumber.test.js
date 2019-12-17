import React from 'react';
import { shallow } from 'enzyme';
import EventNumber from '../EventNumber';




describe('<EventNumber /> component', () => {
    let EventNumberWrapper ;
    beforeAll(() => {
        EventNumberWrapper  = shallow(<EventNumber />);
    });

    test('render textbox element', () => {
      expect(EventNumberWrapper.find('.numberOfEvents')).toHaveLength(1);
    });
    
    test('show number of events  label', () => {
      expect(EventNumberWrapper.find('.numberOfEvents label')).toHaveLength(1);
    });


    test('render text input', () => {
        expect(EventNumberWrapper .find('.numberOfEvents')).toHaveLength(1);
      });


      test('change state when input changes', () => {
        const eventObject = { target: { value: 24 }};
        EventNumberWrapper.find('#numberOfEvents__input').simulate('change', eventObject);
        expect(EventNumberWrapper.state('numberOfEvents')).toBe(24);
      });
    

   
      
});


